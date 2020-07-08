import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ServiceCallInventoryExpense
 */
export interface ServiceCallInventoryExpense {
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Document Posting Date.
     * @nullable
     */
    documentPostingDate?: Moment;
    /**
     * Document Number.
     * @nullable
     */
    documentNumber?: number;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallInventoryExpense.build]] instead.
 */
export declare function createServiceCallInventoryExpense(json: any): ServiceCallInventoryExpense;
/**
 * ServiceCallInventoryExpenseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceCallInventoryExpenseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ServiceCallInventoryExpense.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallInventoryExpense.documentPostingDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentPostingDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallInventoryExpense.documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallInventoryExpense.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ServiceCallInventoryExpense {
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallInventoryExpense;
}
//# sourceMappingURL=ServiceCallInventoryExpense.d.ts.map