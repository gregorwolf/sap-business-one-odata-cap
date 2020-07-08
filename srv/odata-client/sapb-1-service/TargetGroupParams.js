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
exports.TargetGroupParams = exports.TargetGroupParamsField = exports.createTargetGroupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TargetGroupParams.build]] instead.
 */
function createTargetGroupParams(json) {
    return TargetGroupParams.build(json);
}
exports.createTargetGroupParams = createTargetGroupParams;
/**
 * TargetGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TargetGroupParamsField = /** @class */ (function (_super) {
    __extends(TargetGroupParamsField, _super);
    function TargetGroupParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TargetGroupParams.targetGroupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetGroupCode = new v4_1.ComplexTypeStringPropertyField('TargetGroupCode', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupParams.targetGroupName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetGroupName = new v4_1.ComplexTypeStringPropertyField('TargetGroupName', _this, 'Edm.String');
        return _this;
    }
    return TargetGroupParamsField;
}(v4_1.ComplexTypeField));
exports.TargetGroupParamsField = TargetGroupParamsField;
var TargetGroupParams;
(function (TargetGroupParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TargetGroupCode: function (targetGroupCode) { return ({ targetGroupCode: v4_1.edmToTs(targetGroupCode, 'Edm.String') }); },
            TargetGroupName: function (targetGroupName) { return ({ targetGroupName: v4_1.edmToTs(targetGroupName, 'Edm.String') }); }
        });
    }
    TargetGroupParams.build = build;
})(TargetGroupParams = exports.TargetGroupParams || (exports.TargetGroupParams = {}));
//# sourceMappingURL=TargetGroupParams.js.map