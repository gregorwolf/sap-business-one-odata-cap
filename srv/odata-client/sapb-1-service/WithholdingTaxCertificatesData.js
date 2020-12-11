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
exports.WithholdingTaxCertificatesData = exports.WithholdingTaxCertificatesDataField = exports.createWithholdingTaxCertificatesData = void 0;
var WtGroups_1 = require("./WtGroups");
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of WithholdingTaxCertificatesDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function WithholdingTaxCertificatesDataField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, WithholdingTaxCertificatesData) || this;
        /**
         * Representation of the [[WithholdingTaxCertificatesData.poiCodeRef]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.poiCodeRef = new core_1.ComplexTypeStringPropertyField('POICodeRef', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.poiCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.poiCode = new core_1.ComplexTypeStringPropertyField('POICode', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.certificate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.certificate = new core_1.ComplexTypeStringPropertyField('Certificate', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.wTaxType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wTaxType = new core_1.ComplexTypeStringPropertyField('WTaxType', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.periodIndicator]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodIndicator = new core_1.ComplexTypeStringPropertyField('PeriodIndicator', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.whtAbsId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.whtAbsId = new core_1.ComplexTypeNumberPropertyField('WhtAbsId', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.series]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.series = new core_1.ComplexTypeNumberPropertyField('Series', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.number]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.number = new core_1.ComplexTypeNumberPropertyField('Number', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.issueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.issueDate = new core_1.ComplexTypeDatePropertyField('IssueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.sumVatAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumVatAmount = new core_1.ComplexTypeNumberPropertyField('SumVATAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.sumDocTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumDocTotal = new core_1.ComplexTypeNumberPropertyField('SumDocTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.sumBaseAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumBaseAmount = new core_1.ComplexTypeNumberPropertyField('SumBaseAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.sumAccumAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumAccumAmount = new core_1.ComplexTypeNumberPropertyField('SumAccumAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.sumPercAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumPercAmount = new core_1.ComplexTypeNumberPropertyField('SumPercAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCertificatesData.wtGroupsCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtGroupsCollection = new core_1.CollectionField('WTGroupsCollection', _this, WtGroups_1.WtGroups);
        return _this;
    }
    return WithholdingTaxCertificatesDataField;
}(core_1.ComplexTypeField));
exports.WithholdingTaxCertificatesDataField = WithholdingTaxCertificatesDataField;
var WithholdingTaxCertificatesData;
(function (WithholdingTaxCertificatesData) {
    /**
     * Metadata information on all properties of the `WithholdingTaxCertificatesData` complex type.
     */
    WithholdingTaxCertificatesData._propertyMetadata = [{
            originalName: 'POICodeRef',
            name: 'poiCodeRef',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'POICode',
            name: 'poiCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Certificate',
            name: 'certificate',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WTaxType',
            name: 'wTaxType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PeriodIndicator',
            name: 'periodIndicator',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WhtAbsId',
            name: 'whtAbsId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Series',
            name: 'series',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Number',
            name: 'number',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'IssueDate',
            name: 'issueDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'SumVATAmount',
            name: 'sumVatAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SumDocTotal',
            name: 'sumDocTotal',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SumBaseAmount',
            name: 'sumBaseAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SumAccumAmount',
            name: 'sumAccumAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SumPercAmount',
            name: 'sumPercAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WTGroupsCollection',
            name: 'wtGroupsCollection',
            type: WtGroups_1.WtGroups,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, WithholdingTaxCertificatesData);
    }
    WithholdingTaxCertificatesData.build = build;
})(WithholdingTaxCertificatesData = exports.WithholdingTaxCertificatesData || (exports.WithholdingTaxCertificatesData = {}));
//# sourceMappingURL=WithholdingTaxCertificatesData.js.map