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
exports.ReportLayoutTranslationLine = exports.ReportLayoutTranslationLineField = exports.createReportLayoutTranslationLine = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function ReportLayoutTranslationLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ReportLayoutTranslationLine.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeStringPropertyField('DocEntry', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutTranslationLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutTranslationLine.docName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docName = new v4_1.ComplexTypeStringPropertyField('DocName', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutTranslationLine.languageCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.languageCode = new v4_1.ComplexTypeNumberPropertyField('LanguageCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutTranslationLine.createDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.createDate = new v4_1.ComplexTypeDatePropertyField('CreateDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ReportLayoutTranslationLine.updateDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.updateDate = new v4_1.ComplexTypeDatePropertyField('UpdateDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ReportLayoutTranslationLine.createTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.createTime = new v4_1.ComplexTypeNumberPropertyField('CreateTime', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutTranslationLine.updateTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.updateTime = new v4_1.ComplexTypeNumberPropertyField('UpdateTime', _this, 'Edm.Int32');
        return _this;
    }
    return ReportLayoutTranslationLineField;
}(v4_1.ComplexTypeField));
exports.ReportLayoutTranslationLineField = ReportLayoutTranslationLineField;
var ReportLayoutTranslationLine;
(function (ReportLayoutTranslationLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.String') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            DocName: function (docName) { return ({ docName: v4_1.edmToTs(docName, 'Edm.String') }); },
            LanguageCode: function (languageCode) { return ({ languageCode: v4_1.edmToTs(languageCode, 'Edm.Int32') }); },
            CreateDate: function (createDate) { return ({ createDate: v4_1.edmToTs(createDate, 'Edm.DateTimeOffset') }); },
            UpdateDate: function (updateDate) { return ({ updateDate: v4_1.edmToTs(updateDate, 'Edm.DateTimeOffset') }); },
            CreateTime: function (createTime) { return ({ createTime: v4_1.edmToTs(createTime, 'Edm.Int32') }); },
            UpdateTime: function (updateTime) { return ({ updateTime: v4_1.edmToTs(updateTime, 'Edm.Int32') }); }
        });
    }
    ReportLayoutTranslationLine.build = build;
})(ReportLayoutTranslationLine = exports.ReportLayoutTranslationLine || (exports.ReportLayoutTranslationLine = {}));
//# sourceMappingURL=ReportLayoutTranslationLine.js.map