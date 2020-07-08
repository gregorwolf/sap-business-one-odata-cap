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
exports.CallMessageArgument = exports.CallMessageArgumentField = exports.createCallMessageArgument = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[CallMessageArgument.build]] instead.
 */
function createCallMessageArgument(json) {
    return CallMessageArgument.build(json);
}
exports.createCallMessageArgument = createCallMessageArgument;
/**
 * CallMessageArgumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CallMessageArgumentField = /** @class */ (function (_super) {
    __extends(CallMessageArgumentField, _super);
    function CallMessageArgumentField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CallMessageArgument.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[CallMessageArgument.value]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.value = new v4_1.ComplexTypeStringPropertyField('Value', _this, 'Edm.String');
        return _this;
    }
    return CallMessageArgumentField;
}(v4_1.ComplexTypeField));
exports.CallMessageArgumentField = CallMessageArgumentField;
var CallMessageArgument;
(function (CallMessageArgument) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); },
            Value: function (value) { return ({ value: v4_1.edmToTs(value, 'Edm.String') }); }
        });
    }
    CallMessageArgument.build = build;
})(CallMessageArgument = exports.CallMessageArgument || (exports.CallMessageArgument = {}));
//# sourceMappingURL=CallMessageArgument.js.map