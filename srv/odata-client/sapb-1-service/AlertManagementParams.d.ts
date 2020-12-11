import { AlertManagementTypeEnum } from './AlertManagementTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * AlertManagementParams
 */
export interface AlertManagementParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Type.
     * @nullable
     */
    type?: AlertManagementTypeEnum;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[AlertManagementParams.build]] instead.
 */
export declare function createAlertManagementParams(json: any): AlertManagementParams;
/**
 * AlertManagementParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AlertManagementParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AlertManagementParams> {
    /**
     * Representation of the [[AlertManagementParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AlertManagementParams.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AlertManagementParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of AlertManagementParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace AlertManagementParams {
    /**
     * Metadata information on all properties of the `AlertManagementParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<AlertManagementParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): AlertManagementParams;
}
//# sourceMappingURL=AlertManagementParams.d.ts.map