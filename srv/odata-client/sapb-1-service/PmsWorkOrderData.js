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
exports.PmsWorkOrderData = exports.PmsWorkOrderDataField = exports.createPmsWorkOrderData = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PmsWorkOrderData.build]] instead.
 */
function createPmsWorkOrderData(json) {
    return PmsWorkOrderData.build(json);
}
exports.createPmsWorkOrderData = createPmsWorkOrderData;
/**
 * PmsWorkOrderDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmsWorkOrderDataField = /** @class */ (function (_super) {
    __extends(PmsWorkOrderDataField, _super);
    function PmsWorkOrderDataField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PmsWorkOrderData.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new v4_1.ComplexTypeNumberPropertyField('LineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsWorkOrderData.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new v4_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsWorkOrderData.docNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docNumber = new v4_1.ComplexTypeNumberPropertyField('DocNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsWorkOrderData.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        return _this;
    }
    return PmsWorkOrderDataField;
}(v4_1.ComplexTypeField));
exports.PmsWorkOrderDataField = PmsWorkOrderDataField;
var PmsWorkOrderData;
(function (PmsWorkOrderData) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineID: function (lineId) { return ({ lineId: v4_1.edmToTs(lineId, 'Edm.Int32') }); },
            StageID: function (stageId) { return ({ stageId: v4_1.edmToTs(stageId, 'Edm.Int32') }); },
            DocNumber: function (docNumber) { return ({ docNumber: v4_1.edmToTs(docNumber, 'Edm.Int32') }); },
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); }
        });
    }
    PmsWorkOrderData.build = build;
})(PmsWorkOrderData = exports.PmsWorkOrderData || (exports.PmsWorkOrderData = {}));
//# sourceMappingURL=PmsWorkOrderData.js.map