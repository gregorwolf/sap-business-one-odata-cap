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
exports.CompanyInfo = exports.CompanyInfoField = exports.createCompanyInfo = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[CompanyInfo.build]] instead.
 */
function createCompanyInfo(json) {
    return CompanyInfo.build(json);
}
exports.createCompanyInfo = createCompanyInfo;
/**
 * CompanyInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CompanyInfoField = /** @class */ (function (_super) {
    __extends(CompanyInfoField, _super);
    function CompanyInfoField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CompanyInfo.version]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.version = new v4_1.ComplexTypeNumberPropertyField('Version', _this, 'Edm.Int32');
        /**
         * Representation of the [[CompanyInfo.bisrBankActKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bisrBankActKey = new v4_1.ComplexTypeNumberPropertyField('BISRBankActKey', _this, 'Edm.Int32');
        /**
         * Representation of the [[CompanyInfo.bisrBankCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bisrBankCountry = new v4_1.ComplexTypeStringPropertyField('BISRBankCountry', _this, 'Edm.String');
        /**
         * Representation of the [[CompanyInfo.bisrBankNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bisrBankNo = new v4_1.ComplexTypeStringPropertyField('BISRBankNo', _this, 'Edm.String');
        /**
         * Representation of the [[CompanyInfo.bisrBankAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bisrBankAccount = new v4_1.ComplexTypeStringPropertyField('BISRBankAccount', _this, 'Edm.String');
        /**
         * Representation of the [[CompanyInfo.bisrBranch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bisrBranch = new v4_1.ComplexTypeStringPropertyField('BISRBranch', _this, 'Edm.String');
        /**
         * Representation of the [[CompanyInfo.maxRecordsInChooseFromList]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maxRecordsInChooseFromList = new v4_1.ComplexTypeNumberPropertyField('MaxRecordsInChooseFromList', _this, 'Edm.Int32');
        /**
         * Representation of the [[CompanyInfo.defaultDaysForOrdCanc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultDaysForOrdCanc = new v4_1.ComplexTypeNumberPropertyField('DefaultDaysForOrdCanc', _this, 'Edm.Int32');
        /**
         * Representation of the [[CompanyInfo.percentOfTotalAcquisition]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.percentOfTotalAcquisition = new v4_1.ComplexTypeNumberPropertyField('PercentOfTotalAcquisition', _this, 'Edm.Double');
        /**
         * Representation of the [[CompanyInfo.minimumBaseAmountPerDoc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.minimumBaseAmountPerDoc = new v4_1.ComplexTypeNumberPropertyField('MinimumBaseAmountPerDoc', _this, 'Edm.Double');
        /**
         * Representation of the [[CompanyInfo.minimumAmountForAppndixOp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.minimumAmountForAppndixOp = new v4_1.ComplexTypeNumberPropertyField('MinimumAmountForAppndixOP', _this, 'Edm.Double');
        /**
         * Representation of the [[CompanyInfo.defaultStampTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultStampTax = new v4_1.ComplexTypeStringPropertyField('DefaultStampTax', _this, 'Edm.String');
        /**
         * Representation of the [[CompanyInfo.minimumAmountForAnnualList]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.minimumAmountForAnnualList = new v4_1.ComplexTypeNumberPropertyField('MinimumAmountForAnnualList', _this, 'Edm.Double');
        /**
         * Representation of the [[CompanyInfo.maxNumberOfDocumentsInPmt]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maxNumberOfDocumentsInPmt = new v4_1.ComplexTypeNumberPropertyField('MaxNumberOfDocumentsInPmt', _this, 'Edm.Int32');
        /**
         * Representation of the [[CompanyInfo.companyName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.companyName = new v4_1.ComplexTypeStringPropertyField('CompanyName', _this, 'Edm.String');
        /**
         * Representation of the [[CompanyInfo.b1ITimeOut]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.b1ITimeOut = new v4_1.ComplexTypeNumberPropertyField('B1iTimeOut', _this, 'Edm.Int32');
        return _this;
    }
    return CompanyInfoField;
}(v4_1.ComplexTypeField));
exports.CompanyInfoField = CompanyInfoField;
var CompanyInfo;
(function (CompanyInfo) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Version: function (version) { return ({ version: v4_1.edmToTs(version, 'Edm.Int32') }); },
            BISRBankActKey: function (bisrBankActKey) { return ({ bisrBankActKey: v4_1.edmToTs(bisrBankActKey, 'Edm.Int32') }); },
            BISRBankCountry: function (bisrBankCountry) { return ({ bisrBankCountry: v4_1.edmToTs(bisrBankCountry, 'Edm.String') }); },
            BISRBankNo: function (bisrBankNo) { return ({ bisrBankNo: v4_1.edmToTs(bisrBankNo, 'Edm.String') }); },
            BISRBankAccount: function (bisrBankAccount) { return ({ bisrBankAccount: v4_1.edmToTs(bisrBankAccount, 'Edm.String') }); },
            BISRBranch: function (bisrBranch) { return ({ bisrBranch: v4_1.edmToTs(bisrBranch, 'Edm.String') }); },
            MaxRecordsInChooseFromList: function (maxRecordsInChooseFromList) { return ({ maxRecordsInChooseFromList: v4_1.edmToTs(maxRecordsInChooseFromList, 'Edm.Int32') }); },
            DefaultDaysForOrdCanc: function (defaultDaysForOrdCanc) { return ({ defaultDaysForOrdCanc: v4_1.edmToTs(defaultDaysForOrdCanc, 'Edm.Int32') }); },
            PercentOfTotalAcquisition: function (percentOfTotalAcquisition) { return ({ percentOfTotalAcquisition: v4_1.edmToTs(percentOfTotalAcquisition, 'Edm.Double') }); },
            MinimumBaseAmountPerDoc: function (minimumBaseAmountPerDoc) { return ({ minimumBaseAmountPerDoc: v4_1.edmToTs(minimumBaseAmountPerDoc, 'Edm.Double') }); },
            MinimumAmountForAppndixOP: function (minimumAmountForAppndixOp) { return ({ minimumAmountForAppndixOp: v4_1.edmToTs(minimumAmountForAppndixOp, 'Edm.Double') }); },
            DefaultStampTax: function (defaultStampTax) { return ({ defaultStampTax: v4_1.edmToTs(defaultStampTax, 'Edm.String') }); },
            MinimumAmountForAnnualList: function (minimumAmountForAnnualList) { return ({ minimumAmountForAnnualList: v4_1.edmToTs(minimumAmountForAnnualList, 'Edm.Double') }); },
            MaxNumberOfDocumentsInPmt: function (maxNumberOfDocumentsInPmt) { return ({ maxNumberOfDocumentsInPmt: v4_1.edmToTs(maxNumberOfDocumentsInPmt, 'Edm.Int32') }); },
            CompanyName: function (companyName) { return ({ companyName: v4_1.edmToTs(companyName, 'Edm.String') }); },
            B1iTimeOut: function (b1ITimeOut) { return ({ b1ITimeOut: v4_1.edmToTs(b1ITimeOut, 'Edm.Int32') }); }
        });
    }
    CompanyInfo.build = build;
})(CompanyInfo = exports.CompanyInfo || (exports.CompanyInfo = {}));
//# sourceMappingURL=CompanyInfo.js.map