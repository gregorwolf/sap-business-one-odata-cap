import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class RclRecurringTransactionParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace RclRecurringTransactionParams {
    function build(json: {
        [keys: string]: FieldType;
    }): RclRecurringTransactionParams;
}
//# sourceMappingURL=RclRecurringTransactionParams.d.ts.map