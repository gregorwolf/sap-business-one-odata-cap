import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BoeLine
 */
export interface BoeLine {
    /**
     * Boe Key.
     * @nullable
     */
    boeKey?: number;
    /**
     * Boe Number.
     * @nullable
     */
    boeNumber?: number;
    /**
     * Due Date.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * Bank.
     * @nullable
     */
    bank?: string;
    /**
     * Branch.
     * @nullable
     */
    branch?: string;
    /**
     * Account Number.
     * @nullable
     */
    accountNumber?: string;
    /**
     * Amount.
     * @nullable
     */
    amount?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BoeLine.build]] instead.
 */
export declare function createBoeLine(json: any): BoeLine;
/**
 * BoeLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BoeLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BoeLine.boeKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    boeKey: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BoeLine.boeNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    boeNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BoeLine.dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BoeLine.bank]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bank: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BoeLine.branch]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    branch: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BoeLine.accountNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BoeLine.amount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amount: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BoeLine {
    function build(json: {
        [keys: string]: FieldType;
    }): BoeLine;
}
//# sourceMappingURL=BoeLine.d.ts.map