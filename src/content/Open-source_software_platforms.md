---
title: "If Medium would be more like Wikipedia: Decentralized Autonomous Organizations in Open Source"
date: "2019-03-17"
draft: false
path: "/blog/Open-source_software_platforms"
---

January 14, 2020
Course: STS Reflection Project
Semester: Spring 2020
Assessor: Dr. Fabian Geier

<!-- TOC -->

[Content](#content)auto

- [1 Introduction](#1-introduction)
  - [1.1 Focus](#11-focus)
- [2 Open vs Proprietary Internet Platform](#2-open-vs-proprietary-internet-platform)
  - [2.1 Open source software and Marketplaces and Platforms](#21-open-source-software-and-marketplaces-and-platforms)
    - [2.1.2 Marketplaces and Platforms](#212-marketplaces-and-platforms)
    - [2.1.1 Open source software](#211-open-source-software)
  - [2.2 DApps and DAOs](#22-dapps-and-daos)
    - [2.2.1 Example Steemit.com](#221-example-steemitcom)
  - [2.3 DApp Management Tools](#23-dapp-management-tools)
    - [2.3.1 Colony](#231-colony)
    - [2.3.2 Aragon](#232-aragon)
    - [2.3.3 Others](#233-others)
    - [2.3.4 Design of Tools](#234-design-of-tools)
- [3 Comparison of the economics of different organization types](#3-comparison-of-the-economics-of-different-organization-types)
  - [3.1 Company Founding and Economics](#31-company-founding-and-economics)
  - [3.2 Decentralization](#32-decentralization)
  - [3.3 Platform-Risks](#33-platform-risks)
  - [4 Obstacles for DApp Platforms](#4-obstacles-for-dapp-platforms)
    - [4.1 Technological](#41-technological)
    - [4.2 User Experience](#42-user-experience)
- [5 Conclusion](#5-conclusion)
- [References](#references)

<!-- /TOC -->

## Content

## 1 Introduction

The value which is captured by a company and its products varies widely by its organizational form.

Open source projects create massive amounts of value[^1] of which most is not captured by its contributors.

In contrast, semi-open platforms like medium.com that are organized and supported by traditional inter-organizational structures like hierarchies, markets and brokerages[^2]. They create value for their users which is monetized and captured by the company and eventually by its founders and investors as stock options.

These types of companies are compared later in the article

### 1.1 Focus

The focus of the article is the significance of decentralized Applications (DApps) creation and operation of a DApp and less the technical details of the distributed ledger infrastructure.

## 2 Open vs Proprietary Internet Platform

### 2.1 Open source software and Marketplaces and Platforms

#### 2.1.2 Marketplaces and Platforms

Transaction Cost Economics (TCE) theory, popularized by Ronald Coase’s ‘Theory of the Firm’[^3], postulates that firms exist to minimize transaction costs.

Gig economy platforms (e.g. Uber, Airbnb), market networks (e.g.eBay, Amazon Marketplace) flourish because they are minimizing transaction costs consisting out of Search & Information-cost, Bargaining-costs, and Monitoring & enforcement-costs for example through expensive processes, like due diligence and contracts.

This is done with command-and-control hierarchy, making search and information discovery easy, bargaining straightforward, and having policing and enforcement provided essentially for free by the platform, where before coordination of production was done via the market mechanism.[^4]

With new technologies like the Ethereum-based protocols of companies like Colony for creating and operating internet organizations, rules are defined in code and enforced by a blockchain mining process. This automation and trust-creation enable entirely new and previously impossible organizational forms to come into being.

Before we continue to examine those technologies lets look at other types of organizations and why open Source software projects are formed.

#### 2.1.1 Open source software

Open source software products can be created in many ways but one of the most prevailing ways are two kinds of groups:

The first kind is a company, employs different business strategies that rest on the premise that users of open-source technologies are willing to purchase additional software features under proprietary licenses or purchase other services or elements of value that complement the open-source software that is core to the business for example through hosting. Wikipedia categorizes those into Selling users, Pre-selling code, Selling intellectual property and Selling proprietary additives[^5]

The second kind is an intrinsically motivated group of people that build a product in their free time and publish this product under a free license to be used by anybody. They do not form a company and introduce ways of monetization or provide hosting services. The most used way to sustain such projects are voluntary donations like the Sponsor program introduced by GitHub[^6] in 2019.

Till recently there were only little tools available to manage a trusted community of open source contributors that also host and deploy the created software and monetize their work directly i.e. capture value of the value created for the customer, for example by introducing subscriptions.

As we will see in the section those tools based on blockchain technology already exist and are increasing in adoption.

### 2.2 DApps and DAOs

The Financial Crimes Enforcement Network (FinCEN) of the United States defines a DApp as follows: “Decentralized (distributed) application (DApp) is a term that refers to software programs that operate on a P2P network of computers running a blockchain platform (a type of distributed public ledger that allows the development of secondary blockchains), designed such that they are not controlled by a single person or group of persons (that is, they do not have an identifiable administrator). An owner/operator of a DApp may deploy it to perform a wide variety of functions, including acting as an unincorporated organization, such as a software agency to provide financial services[^7]. Generally, a DApp user must pay a fee to the DApp (for the ultimate benefit of the owner/operator) in order to run the software. The fee is commonly paid in CVC[^8].”

The difference between DApps and DAOs is not clearly defined. However, the term DAO is often used for a more futuristic concept where the organization itself has certain intelligence and humans operate more on the “edges”.[^9]

#### 2.2.1 Example Steemit.com

The most prominent example is the Steem blockchain and its content platform steemit.com.

The Steem “blue paper” states that:

> “These actors, such as content creators, witnesses, and curators, compete in > specialized ways for the token” and “... are incentivized to compete in ways that add value to the network.

Secondly, its system enables multiple beneficiaries:

> For any given post there may be a number of different people who have a financial interest in the reward. This includes the author, possible co-authors, referrers, hosting providers, blogs that embedded blockchain comments, and tool developers. Whatever website or tool that is used to construct a post or comment will have the ability to set how rewards from that comment are divided among various parties. This allows for various forms of collaboration, as well as a way for platforms that are built on top of the Steem blockchain to collect a portion of the rewards from their users.[^10]

This system also enables, that everyone has ownership of their published content.[^11]

In the next section, we will look at some software applications that can act as tools to build and manage such kind of systems.

### 2.3 DApp Management Tools

Here we look at two existing tools allow the easy creation, management, and governance of a community:

#### 2.3.1 Colony

The marketing material of a company states that: Colony is a complete toolkit for digital companies”, whereby “A colony is a new kind of internet-native digital company where rules are enforced by software instead of hierarchy.”

Its tool lets you “Define structure, Distribute authority, Allocate budgets, Coordinate work, Streamline payments, Quantify performance”[^12]

#### 2.3.2 Aragon

According to Aragon marketing material it’s “Aragon empowers you to freely organize and collaborate without borders or intermediaries. Create global, bureaucracy-free organizations, companies, and communities.“[^13]

It offers similar services as the previously described Colony

Here is a simplified example of a Solidity Script which is from a tutorial of Aragon called “3 steps to Governance” to manage the basic functionality of a DApp i.e. DAO consisting of Permissions, Forward and an Execution Script[^15]:

```
function hasPermission(
    address who
    address where,
    address what
	return (bool);
)
function foreward(bytes evmScript);
function execScript(bytes evmScript)
    return (bytes)
```

This example shows the easy of developing the basic functionality of a DApp.

#### 2.3.3 Others

The company Abridged also states an interesting feature that enables its users to: “Create process flows that other communities find valuable & share them on our global marketplace”.[^16]

In his work OpenCollab: A Blockchain based Protocol to Incentivize open-source Software[^17] Development Yondon Fu describes a command-line tool and system that enables a decentralized Git workflow for developing open source software.

> “The OpenCollab-CLI command-line tool along with our extensions to the Mango protocol enables a decentralized Git workflow that not only obviates the need for a centralized service like GitHub to coordinate and collaborate for projects, but also creates the possibility of directly integrating features such as payments and governance mechanisms directly into a repository at the protocol level.”

#### 2.3.4 Design of Tools

In the design of such tools for the purpose of creating an open-source organization, one should not forget the psychological effects of monetary and non-monetary incentives. A great explanation of this difficulty is the following:

“Under the previous “incomplete contract,” parents and (child care-) workers had negotiated an informal but acceptable bargain. When that culture came to include an explicit fine, the parents could view the workers as a means to an end, rather than as partners with a mix of social and commercial bonds.

People’s behavior toward one another isn’t fully described by the market, because market transactions cover only a small part of the repertoire of human behavior”[^18]

Therefore, one should be aware of incomplete contracts between collaborators and employees when creating those token-based incentivization systems and converting management processes into DApps.

## 3 Comparison of the economics of different organization types

This list of Tools and show the confusion that is created around different technologies once can use to create an autonomous or and decentralized application. What follows is a more abstract qualitative comparison on different platform types and their respective infrastructure.

This contrast in value creation and capturing is depicted in a simple table below by comparing Wikipedia.org and Medium.com. Medium is a social network and publishing company valued at around \$600 million[^19] that crowdsources most of its content from contributors and hides some of them behind a paywall.

### 3.1 Company Founding and Economics

Wikipedia is a non-profit that was founded early in the days of the internet and has produced 6,058,354 in over 20 years[^20]. Medium is venture capital founded company and has to make massive investments in marketing to create network effects through temporarily faking a platform with two-sided supply through hiring writers to create a first supply of content for its platform. Secondly, since Medium is a private held company it needs to increase its profits regularly to return a profit for inverstors.[^21]

### 3.2 Decentralization

Steemit.com is politically decentralized (no one controls them) and architecturally decentralized (no infrastructural central point of failure). But it is logically centralized (there is one commonly agreed state and the system behaves like a single computer).[^22]

### 3.3 Platform-Risks

Another point where open-platforms and blockchain-networks like steemit.com show their superiority is the fact, that you don't expose yourself to platform-risks[^21] when investing time and money into them.

<table>
  <tr>
   <td colspan="3" >Example
   </td>
   <td><a href="http://Wikipedia.org">Wikipedia.org</a>
   </td>
   <td><a href="http://Medium.com">Medium.com</a>
   </td>
   <td><a href="http://Steemit.com">Steemit.com</a>
   </td>
  </tr>
  <tr>
   <td colspan="3" >company type
   </td>
   <td>non-profit SaaS
   </td>
   <td>commercial SaaS
   </td>
   <td>DAO i.e. DApp
   </td>
  </tr>
  <tr>
   <td rowspan="3" colspan="2" >Decentralization
   </td>
   <td>Logical
   </td>
   <td>No (censorship)
   </td>
   <td>No (censorship)
   </td>
   <td>yes
   </td>
  </tr>
  <tr>
   <td>Political
   </td>
   <td>yes
   </td>
   <td>No
   </td>
   <td>yes
   </td>
  </tr>
  <tr>
   <td>Architectural
   </td>
   <td>?
   </td>
   <td>?
   </td>
   <td>yes
   </td>
  </tr>
  <tr>
   <td colspan="3" >system complexity
   </td>
   <td>medium
   </td>
   <td>low
   </td>
   <td>high
   </td>
  </tr>
  <tr>
   <td rowspan="5" >possibility of contribution
   </td>
   <td colspan="2" >content
   </td>
   <td>yes
   </td>
   <td>yes
   </td>
   <td>yes
   </td>
  </tr>
  <tr>
   <td rowspan="2" >platform
   </td>
   <td>governance
   </td>
   <td>yes (after application)
   </td>
   <td>no
   </td>
   <td>yes
   </td>
  </tr>
  <tr>
   <td>design
   </td>
   <td>yes
   </td>
   <td>no
   </td>
   <td>yes
   </td>
  </tr>
  <tr>
   <td rowspan="2" >computer code
   </td>
   <td>tools
   </td>
   <td>yes
   </td>
   <td>no
   </td>
   <td>yes
   </td>
  </tr>
  <tr>
   <td>infrastructure
   </td>
   <td>no
   </td>
   <td>no
   </td>
   <td>yes
   </td>
  </tr>
  <tr>
   <td colspan="3" >ability for code contributors to derive financial value
   </td>
   <td>no
   </td>
   <td>yes
   </td>
   <td>yes
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Incentivization for
   </td>
   <td colspan="2" >users to produce value
   </td>
   <td>medium
   </td>
   <td>low
   </td>
   <td>high
   </td>
  </tr>
  <tr>
   <td colspan="2" >shareholders to extract i.e. capture value
   </td>
   <td>none
   </td>
   <td>high
   </td>
   <td>none
   </td>
  </tr>
</table>

### 4 Obstacles for DApp Platforms

#### 4.1 Technological

The complexity of blockchain technology is a clear obstacle in its adoption and use for managing open-source projects. It is one of the most advanced networking applications ever created. From the complexity and security of the hashing algorithm to the distributed nature of its sharing and processing, the blockchain is truly innovative.[^24]

#### 4.2 User Experience

Another important point to accelerate the creating of new DApps and DAOs is the user experience.

An influential part for the user experience is the sign-up experience i.e. the first interaction with a platform. At the point of writing, one has to wait several days to get an account on Steemit.com.

Most of these platforms also require the usage of a private address that in most cases is a 20 character long alphanumeric string. This poses another problem of securing storing that address.

Secondly creating a DApp or DAO presupposes significant programming skills in a specific programming language, Solidity, C++, Haskell, and others.[^25] Thus, it is not available for non-engineers.

In comparison, creating a new company is simple. You fill out a few documents and create contacts written in human language with customers and suppliers.

On the user side it's important to improve the sign up and onboarding experience to make use of network effects. This can be seen as the major advantage of current commercial platforms. They minimize the “cost of switching”[^26] to their platform.

Connecting this point to the border theme of this article, it has to become as easy joining and contributing to a DAO as a GitHub organization.

## 5 Conclusion

As we have seen in part 2.3 there are already the first solutions to organize DAOs and thereby create a more equal distribution of value for all parties involved.

In part 4 we outlined the obstacles for the adoption of open platforms and blockchain-based services.

In conclusion, this article demonstrates that there are technical solutions to manage and monetize an open platform. It remains to be seen how fast the adoption of blockchain technologies will continue and if new innovation in user experience can accelerate this adoption.

## References

[^1]: RedHat, Elastic, and more: Why open-source software companies are thriving today (2018). Available at: https://blog.timescale.com/blog/open-source-demise-of-proprietary-software-a49f73f54165/ (Accessed: 12 April 2020).
[^2]: Morgan, L., Feller, J. and Finnegan, P., 2010. Value creation and capture with open source software: a theoretical model for understanding the role of value networks. ECIS.
[^3]: R. H. Coase. The Nature of the Firm. Economica, 4(16):386–405, 1937. ISSN 1468-0335. http://www3.nccu.edu.tw/~jsfeng/CPEC11.pdf.
[^4]: COLONY Technical White Paper 2020-03-04 — commit 0a1d3f8, (2020). Retrieved 12 April 2020, from https://colony.io/whitepaper.pdf
[^5]: _Business models for open-source software_ (2013). Available at: https://en.wikipedia.org/wiki/Business_models_for_open-source_software#cite_note-16 (Accessed: 14 April 2020).
[^6]: _GitHub Sponsors_ (2020). Available at: https://github.com/sponsors (Accessed: 14 April 2020).
[^7]: For an example of a DApp, see SEC’s Release No. 81207 / July 25, 2017, “Report of Investigation Pursuant to Section 21(a) of the Securities Exchange Act of 1934: The DAO,” available at [https://www.sec.gov/litigation/investreport/34-81207.pdf](https://www.sec.gov/litigation/investreport/34-81207.pdf) .
[^8]: Application of FinCEN’s Regulations to Certain Business Models Involving Convertible Virtual Currencies (2020). Retrieved 12 April 2020, from [https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20CVC%20Guidance%20FINAL.pdf](https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20CVC%20Guidance%20FINAL.pdf)
[^9]: Buterin, V., 2014. DAOs, DACs, DAS and more: An incomplete terminology guide. Ethereum Blog, May 6 .2014, Retrieved 12 April 2020, from [https://blog.ethereum.org/2014/05/06/daos-dacs-das-and-more-an-incomplete-terminology-guide](https://blog.ethereum.org/2014/05/06/daos-dacs-das-and-more-an-incomplete-terminology-guide)
[^10]: (2020). A protocol for enabling smart, social currency for publishers and content businesses across the internet, Retrieved 12 April 2020, from https://steem.com/steem-bluepaper.pdf
[^11]: (2020). Discover, Use and Analyze Decentralized Apps in the World’s Largest Dapp Store, Retrieved 12 April 2020, from https://www.dapp.com/token/Dapp_WhitePaper_en.pdf
[^12]: (2020). Retrieved 12 April 2020, from https://colony.io/
[^13]: Aragon Court Dashboard - Aragon Help Desk. (2020). Retrieved 12 April 2020, from https://help.aragon.org/article/42-aragon-court-dashboard
[^14]: Aragon Court Dashboard, Retrieved 12 April 2020 from [https://help.aragon.org/article/42-aragon-court-dashboard](https://help.aragon.org/article/42-aragon-court-dashboard)
[^15]: DAPPCON 2018: Building Modular Organizations - Aragon Brett Sun (Aragon), Retrieved 12 April 2020 from [https://www.youtube.com/watch?v=Zpu8tvCCpNQ](https://www.youtube.com/watch?v=Zpu8tvCCpNQ)
[^16]: Abridged - Run Community Operations with No Code. (2020). Retrieved 12 April 2020, from https://www.abridged.io/
[^17]: Yondon Fu, 2017. OpenCollab: A Blockchain Based Protocol to Incentivize Open Source Software Development, Dartmouth Computer Science Technical Report TR2017-831, Retrieved 12 April 2020, from https://pdfs.semanticscholar.org/8918/a7b036dd7c30e1bda613e9064a4a03c749fc.pdf
[^18]: Clay Shirky Cognitive Surplus
[^19]: Ev Williams's Medium raised $57 million in September -- now it's raised another $50 million. (2016). Retrieved 12 April 2020, from https://www.vox.com/2016/4/21/11586328/medium-ev-wiliams-spark-funding
[^20]: Size of Wikipedia (2020). Available at: https://en.wikipedia.org/wiki/Wikipedia:Size_of_Wikipedia (Accessed: 16 April 2020).
[^21]: Why Decentralization Matters (2018). Available at: https://onezero.medium.com/why-decentralization-matters-5e3f79f7638e (Accessed: 16 April 2020).
[^22]: The Meaning of Decentralization (2017). Available at: https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274 (Accessed: 12 April 2020).
[^23]: Wikipedia - Governance - P2P Foundation (2020). Available at: https://wiki.p2pfoundation.net/Wikipedia_-_Governance (Accessed: 12 April 2020).
[^24]: Woodside, J.M., Augustine Jr, F.K. and Giberson, W., 2017. Blockchain technology adoption status and strategies. Journal of International Technology and Information Management, 26(2), pp.65-93.
[^26]: Current UX Issues of the Blockchain Technology\_ (2018). Available at: https://blog.goodaudience.com/current-ux-issues-of-the-blockchain-technology-142338c6beb6 (Accessed: 12 April 2020).
[^27]: 16 Ways to Measure Network Effects - Andreessen Horowitz\_ (2018). Available at: https://a16z.com/2018/12/13/16-metrics-network-effects/ (Accessed: 13 April 2020).
