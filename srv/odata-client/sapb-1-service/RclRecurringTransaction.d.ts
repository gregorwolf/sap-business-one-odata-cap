import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * RclRecurringTransaction
 */
export interface RclRecurringTransaction {
    /**
     * Transaction Id.
     * @nullable
     */
    transactionId?: number;
    /**
     * Template Id.
     * @nullable
     */
    templateId?: number;
    /**
     * Instance.
     * @nullable
     */
    instance?: number;
    /**
     * Planned Date.
     * @nullable
     */
    plannedDate?: Moment;
    /**
     * Doc Type.
     * @nullable
     */
    docType?: string;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[RclRecurringTransaction.build]] instead.
 */
export declare function createRclRecurringTransaction(json: any): RclRecurringTransaction;
/**
 * RclRecurringTransactionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class RclRecurringTransactionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[RclRecurringTransaction.transactionId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transactionId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[RclRecurringTransaction.templateId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    templateId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[RclRecurringTransaction.instance]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    instance: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[RclRecurringTransaction.plannedDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    plannedDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[RclRecurringTransaction.docType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[RclRecurringTransaction.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace RclRecurringTransaction {
    function build(json: {
        [keys: string]: FieldType;
    }): RclRecurringTransaction;
}
//# sourceMappingURL=RclRecurringTransaction.d.ts.map