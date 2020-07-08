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
exports.ServiceCallStatusParams = exports.ServiceCallStatusParamsField = exports.createServiceCallStatusParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallStatusParams.build]] instead.
 */
function createServiceCallStatusParams(json) {
    return ServiceCallStatusParams.build(json);
}
exports.createServiceCallStatusParams = createServiceCallStatusParams;
/**
 * ServiceCallStatusParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ServiceCallStatusParamsField = /** @class */ (function (_super) {
    __extends(ServiceCallStatusParamsField, _super);
    function ServiceCallStatusParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ServiceCallStatusParams.statusId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.statusId = new v4_1.ComplexTypeNumberPropertyField('StatusId', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceCallStatusParams.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        return _this;
    }
    return ServiceCallStatusParamsField;
}(v4_1.ComplexTypeField));
exports.ServiceCallStatusParamsField = ServiceCallStatusParamsField;
var ServiceCallStatusParams;
(function (ServiceCallStatusParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            StatusId: function (statusId) { return ({ statusId: v4_1.edmToTs(statusId, 'Edm.Int32') }); },
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); }
        });
    }
    ServiceCallStatusParams.build = build;
})(ServiceCallStatusParams = exports.ServiceCallStatusParams || (exports.ServiceCallStatusParams = {}));
//# sourceMappingURL=ServiceCallStatusParams.js.map