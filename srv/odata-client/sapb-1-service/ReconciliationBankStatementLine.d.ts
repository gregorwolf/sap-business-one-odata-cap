import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ReconciliationBankStatementLine
 */
export interface ReconciliationBankStatementLine {
    /**
     * Bank Statement Account Code.
     * @nullable
     */
    bankStatementAccountCode?: string;
    /**
     * Sequence.
     * @nullable
     */
    sequence?: number;
    /**
     * Date.
     * @nullable
     */
    date?: Moment;
    /**
     * Ref 1.
     * @nullable
     */
    ref1?: string;
    /**
     * Amount.
     * @nullable
     */
    amount?: number;
    /**
     * Details.
     * @nullable
     */
    details?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ReconciliationBankStatementLine.build]] instead.
 */
export declare function createReconciliationBankStatementLine(json: any): ReconciliationBankStatementLine;
/**
 * ReconciliationBankStatementLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ReconciliationBankStatementLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ReconciliationBankStatementLine> {
    /**
     * Representation of the [[ReconciliationBankStatementLine.bankStatementAccountCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankStatementAccountCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReconciliationBankStatementLine.sequence]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequence: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReconciliationBankStatementLine.date]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    date: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ReconciliationBankStatementLine.ref1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ref1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReconciliationBankStatementLine.amount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReconciliationBankStatementLine.details]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    details: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ReconciliationBankStatementLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ReconciliationBankStatementLine {
    /**
     * Metadata information on all properties of the `ReconciliationBankStatementLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ReconciliationBankStatementLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ReconciliationBankStatementLine;
}
//# sourceMappingURL=ReconciliationBankStatementLine.d.ts.map