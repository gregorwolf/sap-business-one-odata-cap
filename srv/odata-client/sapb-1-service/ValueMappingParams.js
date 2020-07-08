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
exports.ValueMappingParams = exports.ValueMappingParamsField = exports.createValueMappingParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ValueMappingParams.build]] instead.
 */
function createValueMappingParams(json) {
    return ValueMappingParams.build(json);
}
exports.createValueMappingParams = createValueMappingParams;
/**
 * ValueMappingParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ValueMappingParamsField = /** @class */ (function (_super) {
    __extends(ValueMappingParamsField, _super);
    function ValueMappingParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ValueMappingParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new v4_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        return _this;
    }
    return ValueMappingParamsField;
}(v4_1.ComplexTypeField));
exports.ValueMappingParamsField = ValueMappingParamsField;
var ValueMappingParams;
(function (ValueMappingParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsEntry: function (absEntry) { return ({ absEntry: v4_1.edmToTs(absEntry, 'Edm.Int32') }); }
        });
    }
    ValueMappingParams.build = build;
})(ValueMappingParams = exports.ValueMappingParams || (exports.ValueMappingParams = {}));
//# sourceMappingURL=ValueMappingParams.js.map