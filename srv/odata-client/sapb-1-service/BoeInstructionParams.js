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
exports.BoeInstructionParams = exports.BoeInstructionParamsField = exports.createBoeInstructionParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BoeInstructionParams.build]] instead.
 */
function createBoeInstructionParams(json) {
    return BoeInstructionParams.build(json);
}
exports.createBoeInstructionParams = createBoeInstructionParams;
/**
 * BoeInstructionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BoeInstructionParamsField = /** @class */ (function (_super) {
    __extends(BoeInstructionParamsField, _super);
    function BoeInstructionParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BoeInstructionParams.instructionEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.instructionEntry = new v4_1.ComplexTypeNumberPropertyField('InstructionEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[BoeInstructionParams.instructionCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.instructionCode = new v4_1.ComplexTypeStringPropertyField('InstructionCode', _this, 'Edm.String');
        return _this;
    }
    return BoeInstructionParamsField;
}(v4_1.ComplexTypeField));
exports.BoeInstructionParamsField = BoeInstructionParamsField;
var BoeInstructionParams;
(function (BoeInstructionParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            InstructionEntry: function (instructionEntry) { return ({ instructionEntry: v4_1.edmToTs(instructionEntry, 'Edm.Int32') }); },
            InstructionCode: function (instructionCode) { return ({ instructionCode: v4_1.edmToTs(instructionCode, 'Edm.String') }); }
        });
    }
    BoeInstructionParams.build = build;
})(BoeInstructionParams = exports.BoeInstructionParams || (exports.BoeInstructionParams = {}));
//# sourceMappingURL=BoeInstructionParams.js.map