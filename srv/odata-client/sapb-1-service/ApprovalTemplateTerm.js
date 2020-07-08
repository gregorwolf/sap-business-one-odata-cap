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
exports.ApprovalTemplateTerm = exports.ApprovalTemplateTermField = exports.createApprovalTemplateTerm = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateTerm.build]] instead.
 */
function createApprovalTemplateTerm(json) {
    return ApprovalTemplateTerm.build(json);
}
exports.createApprovalTemplateTerm = createApprovalTemplateTerm;
/**
 * ApprovalTemplateTermField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ApprovalTemplateTermField = /** @class */ (function (_super) {
    __extends(ApprovalTemplateTermField, _super);
    function ApprovalTemplateTermField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ApprovalTemplateTerm.value]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.value = new v4_1.ComplexTypeStringPropertyField('Value', _this, 'Edm.String');
        return _this;
    }
    return ApprovalTemplateTermField;
}(v4_1.ComplexTypeField));
exports.ApprovalTemplateTermField = ApprovalTemplateTermField;
var ApprovalTemplateTerm;
(function (ApprovalTemplateTerm) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Value: function (value) { return ({ value: v4_1.edmToTs(value, 'Edm.String') }); }
        });
    }
    ApprovalTemplateTerm.build = build;
})(ApprovalTemplateTerm = exports.ApprovalTemplateTerm || (exports.ApprovalTemplateTerm = {}));
//# sourceMappingURL=ApprovalTemplateTerm.js.map