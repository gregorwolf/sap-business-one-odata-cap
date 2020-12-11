import { RclRecurringExecutionHandlingEnum } from './RclRecurringExecutionHandlingEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * RclRecurringExecutionParams
 */
export interface RclRecurringExecutionParams {
    /**
     * On Error.
     * @nullable
     */
    onError?: RclRecurringExecutionHandlingEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[RclRecurringExecutionParams.build]] instead.
 */
export declare function createRclRecurringExecutionParams(json: any): RclRecurringExecutionParams;
/**
 * RclRecurringExecutionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class RclRecurringExecutionParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, RclRecurringExecutionParams> {
    /**
     * Representation of the [[RclRecurringExecutionParams.onError]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    onError: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of RclRecurringExecutionParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace RclRecurringExecutionParams {
    /**
     * Metadata information on all properties of the `RclRecurringExecutionParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<RclRecurringExecutionParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): RclRecurringExecutionParams;
}
//# sourceMappingURL=RclRecurringExecutionParams.d.ts.map