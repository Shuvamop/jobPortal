const express = require('express')
const Route = express.Router();
const adminapicontroller_banner_homecontent=require('../../controller/Api/Admin/adminHomeContent/bannercotroller')
const adminapicontroller_category_homecontent=require('../../controller/Api/Admin/adminHomeContent/categorycontroller')

const dashboardApiController=require('../../controller/Api/Admin/dashboardApiController')
const blogApiController = require('../../controller/Api/Admin/blogApiController')
const jobApiController = require('../../controller/Api/Admin/jobApiController')
// const upload=require('../../multerConfig')
const verifyAdminToken = require('../../middleware/api/verifyAdminToken')

const singleUpload = require('../../multerConfig')
const upload=require('../../multerConfig')

Route.post('/create_banner',upload.single('image'),adminapicontroller_banner_homecontent.create_banner)
Route.get('/getallbanner',adminapicontroller_banner_homecontent.getallbanner)
Route.post('/update_banner/:id',upload.single('image'),adminapicontroller_banner_homecontent.updatebanner)
Route.post('/delete_banner/:id',adminapicontroller_banner_homecontent.deltetebanner)



Route.post('/create_category',upload.single('image'),adminapicontroller_category_homecontent.create_category)

Route.get('/getallcategory',adminapicontroller_category_homecontent.getallcategory)
Route.post('/update_category/:id',upload.single('image'),adminapicontroller_category_homecontent.updatecategory)
Route.post('/delete_category/:id',adminapicontroller_category_homecontent.deltetecategory)



//adminlogin
Route.post('/api/adminlogin',dashboardApiController.adminLoginAPI)
Route.get('/api/admin/dashboard', verifyAdminToken,dashboardApiController.dashboardAPI);
Route.get('/api/admin/allusers', verifyAdminToken, dashboardApiController.allUsersAPI);
Route.get('/api/admin/allemployees', verifyAdminToken, dashboardApiController.allEmployeesAPI);
Route.get('/api/admin/switchuser/:id', verifyAdminToken,dashboardApiController.switchStatusOfUserAPI);


//admin blog
Route.get('/api/admin/allblogs', verifyAdminToken, blogApiController.fetchAllBlogsAPI);
Route.post('/api/admin/addpost', verifyAdminToken, singleUpload.single('image'), blogApiController.addPostAPI);
Route.get('/api/admin/blogs/:id', verifyAdminToken, blogApiController.fetchBlogsByIdsAPI);
Route.put('/api/admin/switch-blog/:id', verifyAdminToken, blogApiController.switchBlogPostAPI);

//job and employee
Route.get('/api/admin/all-jobs', verifyAdminToken, jobApiController.allJobsAPI);
Route.put('/api/admin/toggle-job/:id', verifyAdminToken, jobApiController.toggleJobStatusAPI);


module.exports=Route