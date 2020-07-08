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
exports.WithholdingTaxCertificatesData = exports.WithholdingTaxCertificatesDataField = exports.createWithholdingTaxCertificatesData = void 0;
var WtGroups_1 = require("./WtGroups");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxCertificatesData.build]] instead.
 */
function createWithholdingTaxCertificatesData(json) {
    return WithholdingTaxCertificatesData.build(json);
}
exports.createWithholdingTaxCertificatesData = createWithholdingTaxCertificatesData;
/**
 * WithholdingTaxCertificatesDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WithholdingTaxCertificatesDataField = /** @class */ (function (_super) {
    __extends(WithholdingTaxCertificatesDataField, _super);
    function WithholdingTaxCertificatesDataField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WithholdingTaxCertificatesData.poiCodeRef]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.poiCodeRef = new v4_1.ComplexTypeStringPropertyField('POICodeRef', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.poiCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.poiCode = new v4_1.ComplexTypeStringPropertyField('POICode', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.certificate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.certificate = new v4_1.ComplexTypeStringPropertyField('Certificate', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.wTaxType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wTaxType = new v4_1.ComplexTypeStringPropertyField('WTaxType', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.periodIndicator]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodIndicator = new v4_1.ComplexTypeStringPropertyField('PeriodIndicator', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.whtAbsId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.whtAbsId = new v4_1.ComplexTypeNumberPropertyField('WhtAbsId', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.series]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.series = new v4_1.ComplexTypeNumberPropertyField('Series', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.number]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.number = new v4_1.ComplexTypeNumberPropertyField('Number', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.issueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.issueDate = new v4_1.ComplexTypeDatePropertyField('IssueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.sumVatAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumVatAmount = new v4_1.ComplexTypeNumberPropertyField('SumVATAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.sumDocTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumDocTotal = new v4_1.ComplexTypeNumberPropertyField('SumDocTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.sumBaseAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumBaseAmount = new v4_1.ComplexTypeNumberPropertyField('SumBaseAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.sumAccumAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumAccumAmount = new v4_1.ComplexTypeNumberPropertyField('SumAccumAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.sumPercAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumPercAmount = new v4_1.ComplexTypeNumberPropertyField('SumPercAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.wtGroupsCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtGroupsCollection = new WtGroups_1.WtGroupsField('WTGroupsCollection', _this);
        return _this;
    }
    return WithholdingTaxCertificatesDataField;
}(v4_1.ComplexTypeField));
exports.WithholdingTaxCertificatesDataField = WithholdingTaxCertificatesDataField;
var WithholdingTaxCertificatesData;
(function (WithholdingTaxCertificatesData) {
    function build(json) {
        return v4_1.createComplexType(json, {
            POICodeRef: function (poiCodeRef) { return ({ poiCodeRef: v4_1.edmToTs(poiCodeRef, 'Edm.String') }); },
            POICode: function (poiCode) { return ({ poiCode: v4_1.edmToTs(poiCode, 'Edm.String') }); },
            Certificate: function (certificate) { return ({ certificate: v4_1.edmToTs(certificate, 'Edm.String') }); },
            WTaxType: function (wTaxType) { return ({ wTaxType: v4_1.edmToTs(wTaxType, 'Edm.String') }); },
            PeriodIndicator: function (periodIndicator) { return ({ periodIndicator: v4_1.edmToTs(periodIndicator, 'Edm.String') }); },
            WhtAbsId: function (whtAbsId) { return ({ whtAbsId: v4_1.edmToTs(whtAbsId, 'Edm.Int32') }); },
            Series: function (series) { return ({ series: v4_1.edmToTs(series, 'Edm.Int32') }); },
            Number: function (number) { return ({ number: v4_1.edmToTs(number, 'Edm.Int32') }); },
            IssueDate: function (issueDate) { return ({ issueDate: v4_1.edmToTs(issueDate, 'Edm.DateTimeOffset') }); },
            SumVATAmount: function (sumVatAmount) { return ({ sumVatAmount: v4_1.edmToTs(sumVatAmount, 'Edm.Double') }); },
            SumDocTotal: function (sumDocTotal) { return ({ sumDocTotal: v4_1.edmToTs(sumDocTotal, 'Edm.Double') }); },
            SumBaseAmount: function (sumBaseAmount) { return ({ sumBaseAmount: v4_1.edmToTs(sumBaseAmount, 'Edm.Double') }); },
            SumAccumAmount: function (sumAccumAmount) { return ({ sumAccumAmount: v4_1.edmToTs(sumAccumAmount, 'Edm.Double') }); },
            SumPercAmount: function (sumPercAmount) { return ({ sumPercAmount: v4_1.edmToTs(sumPercAmount, 'Edm.Double') }); },
            WTGroupsCollection: function (wtGroupsCollection) { return ({ wtGroupsCollection: WtGroups_1.WtGroups.build(wtGroupsCollection) }); }
        });
    }
    WithholdingTaxCertificatesData.build = build;
})(WithholdingTaxCertificatesData = exports.WithholdingTaxCertificatesData || (exports.WithholdingTaxCertificatesData = {}));
//# sourceMappingURL=WithholdingTaxCertificatesData.js.map