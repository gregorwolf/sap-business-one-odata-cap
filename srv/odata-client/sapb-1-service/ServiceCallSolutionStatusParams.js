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
exports.ServiceCallSolutionStatusParams = exports.ServiceCallSolutionStatusParamsField = exports.createServiceCallSolutionStatusParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallSolutionStatusParams.build]] instead.
 */
function createServiceCallSolutionStatusParams(json) {
    return ServiceCallSolutionStatusParams.build(json);
}
exports.createServiceCallSolutionStatusParams = createServiceCallSolutionStatusParams;
/**
 * ServiceCallSolutionStatusParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ServiceCallSolutionStatusParamsField = /** @class */ (function (_super) {
    __extends(ServiceCallSolutionStatusParamsField, _super);
    function ServiceCallSolutionStatusParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ServiceCallSolutionStatusParams.statusId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.statusId = new v4_1.ComplexTypeNumberPropertyField('StatusId', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceCallSolutionStatusParams.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        return _this;
    }
    return ServiceCallSolutionStatusParamsField;
}(v4_1.ComplexTypeField));
exports.ServiceCallSolutionStatusParamsField = ServiceCallSolutionStatusParamsField;
var ServiceCallSolutionStatusParams;
(function (ServiceCallSolutionStatusParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            StatusId: function (statusId) { return ({ statusId: v4_1.edmToTs(statusId, 'Edm.Int32') }); },
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); }
        });
    }
    ServiceCallSolutionStatusParams.build = build;
})(ServiceCallSolutionStatusParams = exports.ServiceCallSolutionStatusParams || (exports.ServiceCallSolutionStatusParams = {}));
//# sourceMappingURL=ServiceCallSolutionStatusParams.js.map