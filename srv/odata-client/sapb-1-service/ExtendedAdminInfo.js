"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedAdminInfo = exports.ExtendedAdminInfoField = exports.createExtendedAdminInfo = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ExtendedAdminInfo.build]] instead.
 */
function createExtendedAdminInfo(json) {
    return ExtendedAdminInfo.build(json);
}
exports.createExtendedAdminInfo = createExtendedAdminInfo;
/**
 * ExtendedAdminInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ExtendedAdminInfoField = /** @class */ (function (_super) {
    __extends(ExtendedAdminInfoField, _super);
    function ExtendedAdminInfoField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ExtendedAdminInfo.addressType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressType = new v4_1.ComplexTypeStringPropertyField('AddressType', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.streetNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.streetNo = new v4_1.ComplexTypeStringPropertyField('StreetNo', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.stdCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stdCode = new v4_1.ComplexTypeNumberPropertyField('STDCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedAdminInfo.stdCodeForeign]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stdCodeForeign = new v4_1.ComplexTypeNumberPropertyField('STDCodeForeign', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedAdminInfo.natureOfCompanyCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.natureOfCompanyCode = new v4_1.ComplexTypeNumberPropertyField('NatureOfCompanyCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedAdminInfo.economicActivityTypeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.economicActivityTypeCode = new v4_1.ComplexTypeNumberPropertyField('EconomicActivityTypeCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedAdminInfo.creditContributionOriginCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditContributionOriginCode = new v4_1.ComplexTypeStringPropertyField('CreditContributionOriginCode', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.ipiPeriodCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ipiPeriodCode = new v4_1.ComplexTypeStringPropertyField('IPIPeriodCode', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.cooperativeAssociationTypeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cooperativeAssociationTypeCode = new v4_1.ComplexTypeNumberPropertyField('CooperativeAssociationTypeCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedAdminInfo.profitTaxationCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.profitTaxationCode = new v4_1.ComplexTypeNumberPropertyField('ProfitTaxationCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedAdminInfo.companyQualificationCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.companyQualificationCode = new v4_1.ComplexTypeNumberPropertyField('CompanyQualificationCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedAdminInfo.declarerTypeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.declarerTypeCode = new v4_1.ComplexTypeNumberPropertyField('DeclarerTypeCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedAdminInfo.commercialRegister]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.commercialRegister = new v4_1.ComplexTypeStringPropertyField('CommercialRegister', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.dateOfIncorporation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateOfIncorporation = new v4_1.ComplexTypeDatePropertyField('DateOfIncorporation', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExtendedAdminInfo.spedProfile]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.spedProfile = new v4_1.ComplexTypeStringPropertyField('SPEDProfile', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.environmentType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.environmentType = new v4_1.ComplexTypeNumberPropertyField('EnvironmentType', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedAdminInfo.okdpNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.okdpNumber = new v4_1.ComplexTypeStringPropertyField('OKDPNumber', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.globalLocationNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.globalLocationNumber = new v4_1.ComplexTypeStringPropertyField('GlobalLocationNumber', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.authorityUser]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.authorityUser = new v4_1.ComplexTypeStringPropertyField('AuthorityUser', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.authorityPassword]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.authorityPassword = new v4_1.ComplexTypeStringPropertyField('AuthorityPassword', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.urLforGoodsTransportService]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.urLforGoodsTransportService = new v4_1.ComplexTypeStringPropertyField('URLforGoodsTransportService', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.urLforInvoiceTypeService]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.urLforInvoiceTypeService = new v4_1.ComplexTypeStringPropertyField('URLforInvoiceTypeService', _this, 'Edm.String');
        return _this;
    }
    return ExtendedAdminInfoField;
}(v4_1.ComplexTypeField));
exports.ExtendedAdminInfoField = ExtendedAdminInfoField;
var ExtendedAdminInfo;
(function (ExtendedAdminInfo) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AddressType: function (addressType) { return ({ addressType: v4_1.edmToTs(addressType, 'Edm.String') }); },
            StreetNo: function (streetNo) { return ({ streetNo: v4_1.edmToTs(streetNo, 'Edm.String') }); },
            STDCode: function (stdCode) { return ({ stdCode: v4_1.edmToTs(stdCode, 'Edm.Int32') }); },
            STDCodeForeign: function (stdCodeForeign) { return ({ stdCodeForeign: v4_1.edmToTs(stdCodeForeign, 'Edm.Int32') }); },
            NatureOfCompanyCode: function (natureOfCompanyCode) { return ({ natureOfCompanyCode: v4_1.edmToTs(natureOfCompanyCode, 'Edm.Int32') }); },
            EconomicActivityTypeCode: function (economicActivityTypeCode) { return ({ economicActivityTypeCode: v4_1.edmToTs(economicActivityTypeCode, 'Edm.Int32') }); },
            CreditContributionOriginCode: function (creditContributionOriginCode) { return ({ creditContributionOriginCode: v4_1.edmToTs(creditContributionOriginCode, 'Edm.String') }); },
            IPIPeriodCode: function (ipiPeriodCode) { return ({ ipiPeriodCode: v4_1.edmToTs(ipiPeriodCode, 'Edm.String') }); },
            CooperativeAssociationTypeCode: function (cooperativeAssociationTypeCode) { return ({ cooperativeAssociationTypeCode: v4_1.edmToTs(cooperativeAssociationTypeCode, 'Edm.Int32') }); },
            ProfitTaxationCode: function (profitTaxationCode) { return ({ profitTaxationCode: v4_1.edmToTs(profitTaxationCode, 'Edm.Int32') }); },
            CompanyQualificationCode: function (companyQualificationCode) { return ({ companyQualificationCode: v4_1.edmToTs(companyQualificationCode, 'Edm.Int32') }); },
            DeclarerTypeCode: function (declarerTypeCode) { return ({ declarerTypeCode: v4_1.edmToTs(declarerTypeCode, 'Edm.Int32') }); },
            CommercialRegister: function (commercialRegister) { return ({ commercialRegister: v4_1.edmToTs(commercialRegister, 'Edm.String') }); },
            DateOfIncorporation: function (dateOfIncorporation) { return ({ dateOfIncorporation: v4_1.edmToTs(dateOfIncorporation, 'Edm.DateTimeOffset') }); },
            SPEDProfile: function (spedProfile) { return ({ spedProfile: v4_1.edmToTs(spedProfile, 'Edm.String') }); },
            EnvironmentType: function (environmentType) { return ({ environmentType: v4_1.edmToTs(environmentType, 'Edm.Int32') }); },
            OKDPNumber: function (okdpNumber) { return ({ okdpNumber: v4_1.edmToTs(okdpNumber, 'Edm.String') }); },
            GlobalLocationNumber: function (globalLocationNumber) { return ({ globalLocationNumber: v4_1.edmToTs(globalLocationNumber, 'Edm.String') }); },
            AuthorityUser: function (authorityUser) { return ({ authorityUser: v4_1.edmToTs(authorityUser, 'Edm.String') }); },
            AuthorityPassword: function (authorityPassword) { return ({ authorityPassword: v4_1.edmToTs(authorityPassword, 'Edm.String') }); },
            URLforGoodsTransportService: function (urLforGoodsTransportService) { return ({ urLforGoodsTransportService: v4_1.edmToTs(urLforGoodsTransportService, 'Edm.String') }); },
            URLforInvoiceTypeService: function (urLforInvoiceTypeService) { return ({ urLforInvoiceTypeService: v4_1.edmToTs(urLforInvoiceTypeService, 'Edm.String') }); }
        });
    }
    ExtendedAdminInfo.build = build;
})(ExtendedAdminInfo = exports.ExtendedAdminInfo || (exports.ExtendedAdminInfo = {}));
//# sourceMappingURL=ExtendedAdminInfo.js.map