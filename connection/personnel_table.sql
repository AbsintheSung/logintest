CREATE TABLE `personnel`(
    `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `phone` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `account` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL
)
 <!--註冊需要:姓名，電話，email，帳號，密碼，確認密碼-->