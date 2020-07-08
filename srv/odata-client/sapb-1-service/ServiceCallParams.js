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
exports.ServiceCallParams = exports.ServiceCallParamsField = exports.createServiceCallParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallParams.build]] instead.
 */
function createServiceCallParams(json) {
    return ServiceCallParams.build(json);
}
exports.createServiceCallParams = createServiceCallParams;
/**
 * ServiceCallParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ServiceCallParamsField = /** @class */ (function (_super) {
    __extends(ServiceCallParamsField, _super);
    function ServiceCallParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ServiceCallParams.serviceCallId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serviceCallId = new v4_1.ComplexTypeNumberPropertyField('ServiceCallID', _this, 'Edm.Int32');
        return _this;
    }
    return ServiceCallParamsField;
}(v4_1.ComplexTypeField));
exports.ServiceCallParamsField = ServiceCallParamsField;
var ServiceCallParams;
(function (ServiceCallParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ServiceCallID: function (serviceCallId) { return ({ serviceCallId: v4_1.edmToTs(serviceCallId, 'Edm.Int32') }); }
        });
    }
    ServiceCallParams.build = build;
})(ServiceCallParams = exports.ServiceCallParams || (exports.ServiceCallParams = {}));
//# sourceMappingURL=ServiceCallParams.js.map