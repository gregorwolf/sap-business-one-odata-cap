"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of ExtendedAdminInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ExtendedAdminInfoField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ExtendedAdminInfo) || this;
        /**
         * Representation of the [[ExtendedAdminInfo.addressType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressType = new core_1.ComplexTypeStringPropertyField('AddressType', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.streetNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.streetNo = new core_1.ComplexTypeStringPropertyField('StreetNo', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.stdCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stdCode = new core_1.ComplexTypeNumberPropertyField('STDCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedAdminInfo.stdCodeForeign]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stdCodeForeign = new core_1.ComplexTypeNumberPropertyField('STDCodeForeign', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedAdminInfo.natureOfCompanyCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.natureOfCompanyCode = new core_1.ComplexTypeNumberPropertyField('NatureOfCompanyCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedAdminInfo.economicActivityTypeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.economicActivityTypeCode = new core_1.ComplexTypeNumberPropertyField('EconomicActivityTypeCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedAdminInfo.creditContributionOriginCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditContributionOriginCode = new core_1.ComplexTypeStringPropertyField('CreditContributionOriginCode', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.ipiPeriodCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ipiPeriodCode = new core_1.ComplexTypeStringPropertyField('IPIPeriodCode', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.cooperativeAssociationTypeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cooperativeAssociationTypeCode = new core_1.ComplexTypeNumberPropertyField('CooperativeAssociationTypeCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedAdminInfo.profitTaxationCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.profitTaxationCode = new core_1.ComplexTypeNumberPropertyField('ProfitTaxationCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedAdminInfo.companyQualificationCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.companyQualificationCode = new core_1.ComplexTypeNumberPropertyField('CompanyQualificationCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedAdminInfo.declarerTypeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.declarerTypeCode = new core_1.ComplexTypeNumberPropertyField('DeclarerTypeCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedAdminInfo.ipiTaxContributor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ipiTaxContributor = new core_1.ComplexTypeEnumPropertyField('IPITaxContributor', _this);
        /**
         * Representation of the [[ExtendedAdminInfo.commercialRegister]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.commercialRegister = new core_1.ComplexTypeStringPropertyField('CommercialRegister', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.dateOfIncorporation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateOfIncorporation = new core_1.ComplexTypeDatePropertyField('DateOfIncorporation', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExtendedAdminInfo.spedProfile]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.spedProfile = new core_1.ComplexTypeStringPropertyField('SPEDProfile', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.environmentType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.environmentType = new core_1.ComplexTypeNumberPropertyField('EnvironmentType', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedAdminInfo.opting4Icms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.opting4Icms = new core_1.ComplexTypeEnumPropertyField('Opting4ICMS', _this);
        /**
         * Representation of the [[ExtendedAdminInfo.okdpNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.okdpNumber = new core_1.ComplexTypeStringPropertyField('OKDPNumber', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.globalLocationNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.globalLocationNumber = new core_1.ComplexTypeStringPropertyField('GlobalLocationNumber', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.enableIntrastat]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableIntrastat = new core_1.ComplexTypeEnumPropertyField('EnableIntrastat', _this);
        /**
         * Representation of the [[ExtendedAdminInfo.authorityUser]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.authorityUser = new core_1.ComplexTypeStringPropertyField('AuthorityUser', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.authorityPassword]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.authorityPassword = new core_1.ComplexTypeStringPropertyField('AuthorityPassword', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.urLforGoodsTransportService]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.urLforGoodsTransportService = new core_1.ComplexTypeStringPropertyField('URLforGoodsTransportService', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.urLforInvoiceTypeService]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.urLforInvoiceTypeService = new core_1.ComplexTypeStringPropertyField('URLforInvoiceTypeService', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedAdminInfo.electronicApprovalForGoodsTransEnabled]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.electronicApprovalForGoodsTransEnabled = new core_1.ComplexTypeEnumPropertyField('ElectronicApprovalForGoodsTransEnabled', _this);
        /**
         * Representation of the [[ExtendedAdminInfo.electronicApprovalForInvoiceEnabled]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.electronicApprovalForInvoiceEnabled = new core_1.ComplexTypeEnumPropertyField('ElectronicApprovalForInvoiceEnabled', _this);
        /**
         * Representation of the [[ExtendedAdminInfo.allowInactiveItemsInInventoryOpeningBalance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allowInactiveItemsInInventoryOpeningBalance = new core_1.ComplexTypeEnumPropertyField('AllowInactiveItemsInInventoryOpeningBalance', _this);
        /**
         * Representation of the [[ExtendedAdminInfo.allowInactiveItemsInInventoryCountingAndPosting]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allowInactiveItemsInInventoryCountingAndPosting = new core_1.ComplexTypeEnumPropertyField('AllowInactiveItemsInInventoryCountingAndPosting', _this);
        /**
         * Representation of the [[ExtendedAdminInfo.autoAssignNewBranchToBp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.autoAssignNewBranchToBp = new core_1.ComplexTypeEnumPropertyField('AutoAssignNewBranchToBP', _this);
        return _this;
    }
    return ExtendedAdminInfoField;
}(core_1.ComplexTypeField));
exports.ExtendedAdminInfoField = ExtendedAdminInfoField;
var ExtendedAdminInfo;
(function (ExtendedAdminInfo) {
    /**
     * Metadata information on all properties of the `ExtendedAdminInfo` complex type.
     */
    ExtendedAdminInfo._propertyMetadata = [{
            originalName: 'AddressType',
            name: 'addressType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StreetNo',
            name: 'streetNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'STDCode',
            name: 'stdCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'STDCodeForeign',
            name: 'stdCodeForeign',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'NatureOfCompanyCode',
            name: 'natureOfCompanyCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'EconomicActivityTypeCode',
            name: 'economicActivityTypeCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CreditContributionOriginCode',
            name: 'creditContributionOriginCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'IPIPeriodCode',
            name: 'ipiPeriodCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CooperativeAssociationTypeCode',
            name: 'cooperativeAssociationTypeCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ProfitTaxationCode',
            name: 'profitTaxationCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CompanyQualificationCode',
            name: 'companyQualificationCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DeclarerTypeCode',
            name: 'declarerTypeCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'IPITaxContributor',
            name: 'ipiTaxContributor',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CommercialRegister',
            name: 'commercialRegister',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DateOfIncorporation',
            name: 'dateOfIncorporation',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'SPEDProfile',
            name: 'spedProfile',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'EnvironmentType',
            name: 'environmentType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Opting4ICMS',
            name: 'opting4Icms',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'OKDPNumber',
            name: 'okdpNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GlobalLocationNumber',
            name: 'globalLocationNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'EnableIntrastat',
            name: 'enableIntrastat',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AuthorityUser',
            name: 'authorityUser',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AuthorityPassword',
            name: 'authorityPassword',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'URLforGoodsTransportService',
            name: 'urLforGoodsTransportService',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'URLforInvoiceTypeService',
            name: 'urLforInvoiceTypeService',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ElectronicApprovalForGoodsTransEnabled',
            name: 'electronicApprovalForGoodsTransEnabled',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ElectronicApprovalForInvoiceEnabled',
            name: 'electronicApprovalForInvoiceEnabled',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AllowInactiveItemsInInventoryOpeningBalance',
            name: 'allowInactiveItemsInInventoryOpeningBalance',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AllowInactiveItemsInInventoryCountingAndPosting',
            name: 'allowInactiveItemsInInventoryCountingAndPosting',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AutoAssignNewBranchToBP',
            name: 'autoAssignNewBranchToBp',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ExtendedAdminInfo);
    }
    ExtendedAdminInfo.build = build;
})(ExtendedAdminInfo = exports.ExtendedAdminInfo || (exports.ExtendedAdminInfo = {}));
//# sourceMappingURL=ExtendedAdminInfo.js.map