import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BpCode
 */
export interface BpCode {
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
    /**
     * Bp Ctrl Acct.
     * @nullable
     */
    bpCtrlAcct?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BpCode.build]] instead.
 */
export declare function createBpCode(json: any): BpCode;
/**
 * BpCodeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BpCodeField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BpCode.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpCode.dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BpCode.debit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    debit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BpCode.credit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    credit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BpCode.systemDebit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    systemDebit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BpCode.systemCredit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    systemCredit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BpCode.foreignDebit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    foreignDebit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BpCode.foreignCredit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    foreignCredit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BpCode.foreignCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    foreignCurrency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpCode.bpCtrlAcct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCtrlAcct: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BpCode {
    function build(json: {
        [keys: string]: FieldType;
    }): BpCode;
}
//# sourceMappingURL=BpCode.d.ts.map