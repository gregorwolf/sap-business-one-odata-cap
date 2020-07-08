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
exports.PmsDocumentData = exports.PmsDocumentDataField = exports.createPmsDocumentData = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PmsDocumentData.build]] instead.
 */
function createPmsDocumentData(json) {
    return PmsDocumentData.build(json);
}
exports.createPmsDocumentData = createPmsDocumentData;
/**
 * PmsDocumentDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmsDocumentDataField = /** @class */ (function (_super) {
    __extends(PmsDocumentDataField, _super);
    function PmsDocumentDataField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PmsDocumentData.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new v4_1.ComplexTypeNumberPropertyField('LineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsDocumentData.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new v4_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsDocumentData.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsDocumentData.docDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docDate = new v4_1.ComplexTypeDatePropertyField('DocDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmsDocumentData.total]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.total = new v4_1.ComplexTypeNumberPropertyField('Total', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsDocumentData.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        return _this;
    }
    return PmsDocumentDataField;
}(v4_1.ComplexTypeField));
exports.PmsDocumentDataField = PmsDocumentDataField;
var PmsDocumentData;
(function (PmsDocumentData) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineID: function (lineId) { return ({ lineId: v4_1.edmToTs(lineId, 'Edm.Int32') }); },
            StageID: function (stageId) { return ({ stageId: v4_1.edmToTs(stageId, 'Edm.Int32') }); },
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            DocDate: function (docDate) { return ({ docDate: v4_1.edmToTs(docDate, 'Edm.DateTimeOffset') }); },
            Total: function (total) { return ({ total: v4_1.edmToTs(total, 'Edm.Double') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); }
        });
    }
    PmsDocumentData.build = build;
})(PmsDocumentData = exports.PmsDocumentData || (exports.PmsDocumentData = {}));
//# sourceMappingURL=PmsDocumentData.js.map