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
exports.BoeInstructionParams = exports.BoeInstructionParamsField = exports.createBoeInstructionParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of BoeInstructionParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BoeInstructionParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BoeInstructionParams) || this;
        /**
         * Representation of the [[BoeInstructionParams.instructionEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.instructionEntry = new core_1.ComplexTypeNumberPropertyField('InstructionEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[BoeInstructionParams.instructionCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.instructionCode = new core_1.ComplexTypeStringPropertyField('InstructionCode', _this, 'Edm.String');
        return _this;
    }
    return BoeInstructionParamsField;
}(core_1.ComplexTypeField));
exports.BoeInstructionParamsField = BoeInstructionParamsField;
var BoeInstructionParams;
(function (BoeInstructionParams) {
    /**
     * Metadata information on all properties of the `BoeInstructionParams` complex type.
     */
    BoeInstructionParams._propertyMetadata = [{
            originalName: 'InstructionEntry',
            name: 'instructionEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'InstructionCode',
            name: 'instructionCode',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BoeInstructionParams);
    }
    BoeInstructionParams.build = build;
})(BoeInstructionParams = exports.BoeInstructionParams || (exports.BoeInstructionParams = {}));
//# sourceMappingURL=BoeInstructionParams.js.map