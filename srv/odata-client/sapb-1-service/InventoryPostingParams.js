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
exports.InventoryPostingParams = exports.InventoryPostingParamsField = exports.createInventoryPostingParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[InventoryPostingParams.build]] instead.
 */
function createInventoryPostingParams(json) {
    return InventoryPostingParams.build(json);
}
exports.createInventoryPostingParams = createInventoryPostingParams;
/**
 * InventoryPostingParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InventoryPostingParamsField = /** @class */ (function (_super) {
    __extends(InventoryPostingParamsField, _super);
    function InventoryPostingParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[InventoryPostingParams.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new v4_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingParams.documentNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentNumber = new v4_1.ComplexTypeNumberPropertyField('DocumentNumber', _this, 'Edm.Int32');
        return _this;
    }
    return InventoryPostingParamsField;
}(v4_1.ComplexTypeField));
exports.InventoryPostingParamsField = InventoryPostingParamsField;
var InventoryPostingParams;
(function (InventoryPostingParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocumentEntry: function (documentEntry) { return ({ documentEntry: v4_1.edmToTs(documentEntry, 'Edm.Int32') }); },
            DocumentNumber: function (documentNumber) { return ({ documentNumber: v4_1.edmToTs(documentNumber, 'Edm.Int32') }); }
        });
    }
    InventoryPostingParams.build = build;
})(InventoryPostingParams = exports.InventoryPostingParams || (exports.InventoryPostingParams = {}));
//# sourceMappingURL=InventoryPostingParams.js.map