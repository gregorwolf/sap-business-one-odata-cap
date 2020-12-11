"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCallTypeParams = exports.ServiceCallTypeParamsField = exports.createServiceCallTypeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallTypeParams.build]] instead.
 */
function createServiceCallTypeParams(json) {
    return ServiceCallTypeParams.build(json);
}
exports.createServiceCallTypeParams = createServiceCallTypeParams;
/**
 * ServiceCallTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ServiceCallTypeParamsField = /** @class */ (function (_super) {
    __extends(ServiceCallTypeParamsField, _super);
    /**
     * Creates an instance of ServiceCallTypeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ServiceCallTypeParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ServiceCallTypeParams) || this;
        /**
         * Representation of the [[ServiceCallTypeParams.callTypeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.callTypeId = new core_1.ComplexTypeNumberPropertyField('CallTypeID', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceCallTypeParams.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        return _this;
    }
    return ServiceCallTypeParamsField;
}(core_1.ComplexTypeField));
exports.ServiceCallTypeParamsField = ServiceCallTypeParamsField;
var ServiceCallTypeParams;
(function (ServiceCallTypeParams) {
    /**
     * Metadata information on all properties of the `ServiceCallTypeParams` complex type.
     */
    ServiceCallTypeParams._propertyMetadata = [{
            originalName: 'CallTypeID',
            name: 'callTypeId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ServiceCallTypeParams);
    }
    ServiceCallTypeParams.build = build;
})(ServiceCallTypeParams = exports.ServiceCallTypeParams || (exports.ServiceCallTypeParams = {}));
//# sourceMappingURL=ServiceCallTypeParams.js.map