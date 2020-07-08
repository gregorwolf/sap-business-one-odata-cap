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
exports.TerminationReasonParams = exports.TerminationReasonParamsField = exports.createTerminationReasonParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TerminationReasonParams.build]] instead.
 */
function createTerminationReasonParams(json) {
    return TerminationReasonParams.build(json);
}
exports.createTerminationReasonParams = createTerminationReasonParams;
/**
 * TerminationReasonParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TerminationReasonParamsField = /** @class */ (function (_super) {
    __extends(TerminationReasonParamsField, _super);
    function TerminationReasonParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TerminationReasonParams.reasonId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reasonId = new v4_1.ComplexTypeNumberPropertyField('ReasonID', _this, 'Edm.Int32');
        /**
         * Representation of the [[TerminationReasonParams.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[TerminationReasonParams.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new v4_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        return _this;
    }
    return TerminationReasonParamsField;
}(v4_1.ComplexTypeField));
exports.TerminationReasonParamsField = TerminationReasonParamsField;
var TerminationReasonParams;
(function (TerminationReasonParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ReasonID: function (reasonId) { return ({ reasonId: v4_1.edmToTs(reasonId, 'Edm.Int32') }); },
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); },
            Description: function (description) { return ({ description: v4_1.edmToTs(description, 'Edm.String') }); }
        });
    }
    TerminationReasonParams.build = build;
})(TerminationReasonParams = exports.TerminationReasonParams || (exports.TerminationReasonParams = {}));
//# sourceMappingURL=TerminationReasonParams.js.map