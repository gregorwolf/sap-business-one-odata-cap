import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * RclRecurringTransactionParams
 */
export interface RclRecurringTransactionParams {
    /**
     * Transaction Id.
     * @nullable
     */
    transactionId?: number;
    /**
     * Planned Date.
     * @nullable
     */
    plannedDate?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[RclRecurringTransactionParams.build]] instead.
 */
export declare function createRclRecurringTransactionParams(json: any): RclRecurringTransactionParams;
/**
 * RclRecurringTransactionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class RclRecurringTransactionParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, RclRecurringTransactionParams> {
    /**
     * Representation of the [[RclRecurringTransactionParams.transactionId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transactionId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[RclRecurringTransactionParams.plannedDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    plannedDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Creates an instance of RclRecurringTransactionParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace RclRecurringTransactionParams {
    /**
     * Metadata information on all properties of the `RclRecurringTransactionParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<RclRecurringTransactionParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): RclRecurringTransactionParams;
}
//# sourceMappingURL=RclRecurringTransactionParams.d.ts.map