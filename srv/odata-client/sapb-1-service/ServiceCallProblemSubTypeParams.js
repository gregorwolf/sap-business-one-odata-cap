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
exports.ServiceCallProblemSubTypeParams = exports.ServiceCallProblemSubTypeParamsField = exports.createServiceCallProblemSubTypeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallProblemSubTypeParams.build]] instead.
 */
function createServiceCallProblemSubTypeParams(json) {
    return ServiceCallProblemSubTypeParams.build(json);
}
exports.createServiceCallProblemSubTypeParams = createServiceCallProblemSubTypeParams;
/**
 * ServiceCallProblemSubTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ServiceCallProblemSubTypeParamsField = /** @class */ (function (_super) {
    __extends(ServiceCallProblemSubTypeParamsField, _super);
    function ServiceCallProblemSubTypeParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ServiceCallProblemSubTypeParams.problemSubTypeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.problemSubTypeId = new v4_1.ComplexTypeNumberPropertyField('ProblemSubTypeID', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceCallProblemSubTypeParams.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        return _this;
    }
    return ServiceCallProblemSubTypeParamsField;
}(v4_1.ComplexTypeField));
exports.ServiceCallProblemSubTypeParamsField = ServiceCallProblemSubTypeParamsField;
var ServiceCallProblemSubTypeParams;
(function (ServiceCallProblemSubTypeParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ProblemSubTypeID: function (problemSubTypeId) { return ({ problemSubTypeId: v4_1.edmToTs(problemSubTypeId, 'Edm.Int32') }); },
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); }
        });
    }
    ServiceCallProblemSubTypeParams.build = build;
})(ServiceCallProblemSubTypeParams = exports.ServiceCallProblemSubTypeParams || (exports.ServiceCallProblemSubTypeParams = {}));
//# sourceMappingURL=ServiceCallProblemSubTypeParams.js.map