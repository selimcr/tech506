<?php
/*!
 * @file  PublicController.php
 * @brief This controller handles the requests for the public site of the company.
 * @author Selim <selim@tech506.com>
 */
namespace Tech506\CompanyBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/*!
 * @class           PublicController
 * @note Extends:   Controller
 * @brief           Public site requests.
 * @test            Test are not implemented yed.
 */
class PublicController extends Controller
{
    /*!
     * @function    homeAction
     * @brief       Renders the home page
     */
    public function homeAction()
    {
        return $this->render('CompanyBundle:Public:home.html.twig', array());
    }

    /*!
    * @function    portfolioAction
    * @brief       Renders the Portfolio page
    */
    public function portfolioAction(){
        return $this->render('CompanyBundle:Public:portfolio.html.twig', array());
    }

    /*!
    * @function    contactAction
    * @brief       Renders the Contact page
    */
    public function contactAction(){
        return $this->render('CompanyBundle:Public:contact.html.twig', array());
    }
}
