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
exports.NatureOfAssesseeParams = exports.NatureOfAssesseeParamsField = exports.createNatureOfAssesseeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[NatureOfAssesseeParams.build]] instead.
 */
function createNatureOfAssesseeParams(json) {
    return NatureOfAssesseeParams.build(json);
}
exports.createNatureOfAssesseeParams = createNatureOfAssesseeParams;
/**
 * NatureOfAssesseeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var NatureOfAssesseeParamsField = /** @class */ (function (_super) {
    __extends(NatureOfAssesseeParamsField, _super);
    function NatureOfAssesseeParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[NatureOfAssesseeParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new v4_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[NatureOfAssesseeParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[NatureOfAssesseeParams.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new v4_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        return _this;
    }
    return NatureOfAssesseeParamsField;
}(v4_1.ComplexTypeField));
exports.NatureOfAssesseeParamsField = NatureOfAssesseeParamsField;
var NatureOfAssesseeParams;
(function (NatureOfAssesseeParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsEntry: function (absEntry) { return ({ absEntry: v4_1.edmToTs(absEntry, 'Edm.Int32') }); },
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.String') }); },
            Description: function (description) { return ({ description: v4_1.edmToTs(description, 'Edm.String') }); }
        });
    }
    NatureOfAssesseeParams.build = build;
})(NatureOfAssesseeParams = exports.NatureOfAssesseeParams || (exports.NatureOfAssesseeParams = {}));
//# sourceMappingURL=NatureOfAssesseeParams.js.map