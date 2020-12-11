import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class BpCodeField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BpCode> {
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
    /**
     * Creates an instance of BpCodeField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BpCode {
    /**
     * Metadata information on all properties of the `BpCode` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BpCode>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BpCode;
}
//# sourceMappingURL=BpCode.d.ts.map