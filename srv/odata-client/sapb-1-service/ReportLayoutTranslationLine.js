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
exports.ReportLayoutTranslationLine = exports.ReportLayoutTranslationLineField = exports.createReportLayoutTranslationLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ReportLayoutTranslationLine.build]] instead.
 */
function createReportLayoutTranslationLine(json) {
    return ReportLayoutTranslationLine.build(json);
}
exports.createReportLayoutTranslationLine = createReportLayoutTranslationLine;
/**
 * ReportLayoutTranslationLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ReportLayoutTranslationLineField = /** @class */ (function (_super) {
    __extends(ReportLayoutTranslationLineField, _super);
    /**
     * Creates an instance of ReportLayoutTranslationLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ReportLayoutTranslationLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ReportLayoutTranslationLine) || this;
        /**
         * Representation of the [[ReportLayoutTranslationLine.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeStringPropertyField('DocEntry', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutTranslationLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutTranslationLine.docName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docName = new core_1.ComplexTypeStringPropertyField('DocName', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutTranslationLine.languageCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.languageCode = new core_1.ComplexTypeNumberPropertyField('LanguageCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutTranslationLine.createDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.createDate = new core_1.ComplexTypeDatePropertyField('CreateDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ReportLayoutTranslationLine.updateDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.updateDate = new core_1.ComplexTypeDatePropertyField('UpdateDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ReportLayoutTranslationLine.createTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.createTime = new core_1.ComplexTypeNumberPropertyField('CreateTime', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutTranslationLine.updateTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.updateTime = new core_1.ComplexTypeNumberPropertyField('UpdateTime', _this, 'Edm.Int32');
        return _this;
    }
    return ReportLayoutTranslationLineField;
}(core_1.ComplexTypeField));
exports.ReportLayoutTranslationLineField = ReportLayoutTranslationLineField;
var ReportLayoutTranslationLine;
(function (ReportLayoutTranslationLine) {
    /**
     * Metadata information on all properties of the `ReportLayoutTranslationLine` complex type.
     */
    ReportLayoutTranslationLine._propertyMetadata = [{
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocName',
            name: 'docName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LanguageCode',
            name: 'languageCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CreateDate',
            name: 'createDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'UpdateDate',
            name: 'updateDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'CreateTime',
            name: 'createTime',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UpdateTime',
            name: 'updateTime',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ReportLayoutTranslationLine);
    }
    ReportLayoutTranslationLine.build = build;
})(ReportLayoutTranslationLine = exports.ReportLayoutTranslationLine || (exports.ReportLayoutTranslationLine = {}));
//# sourceMappingURL=ReportLayoutTranslationLine.js.map