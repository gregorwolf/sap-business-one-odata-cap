import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * GlAccount
 */
export interface GlAccount {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Due Date.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * Debit.
     * @nullable
     */
    debit?: number;
    /**
     * Credit.
     * @nullable
     */
    credit?: number;
    /**
     * System Debit.
     * @nullable
     */
    systemDebit?: number;
    /**
     * System Credit.
     * @nullable
     */
    systemCredit?: number;
    /**
     * Foreign Debit.
     * @nullable
     */
    foreignDebit?: number;
    /**
     * Foreign Credit.
     * @nullable
     */
    foreignCredit?: number;
    /**
     * Foreign Currency.
     * @nullable
     */
    foreignCurrency?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[GlAccount.build]] instead.
 */
export declare function createGlAccount(json: any): GlAccount;
/**
 * GlAccountField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class GlAccountField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[GlAccount.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GlAccount.dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[GlAccount.debit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    debit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[GlAccount.credit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    credit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[GlAccount.systemDebit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    systemDebit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[GlAccount.systemCredit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    systemCredit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[GlAccount.foreignDebit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    foreignDebit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[GlAccount.foreignCredit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    foreignCredit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[GlAccount.foreignCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    foreignCurrency: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace GlAccount {
    function build(json: {
        [keys: string]: FieldType;
    }): GlAccount;
}
//# sourceMappingURL=GlAccount.d.ts.map