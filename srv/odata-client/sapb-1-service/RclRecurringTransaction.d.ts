import { Moment } from 'moment';
import { RclRecurringTransactionStatusEnum } from './RclRecurringTransactionStatusEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Status.
     * @nullable
     */
    status?: RclRecurringTransactionStatusEnum;
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
export declare class RclRecurringTransactionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, RclRecurringTransaction> {
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
     * Representation of the [[RclRecurringTransaction.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeEnumPropertyField<EntityT>;
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
    /**
     * Creates an instance of RclRecurringTransactionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace RclRecurringTransaction {
    /**
     * Metadata information on all properties of the `RclRecurringTransaction` complex type.
     */
    const _propertyMetadata: PropertyMetadata<RclRecurringTransaction>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): RclRecurringTransaction;
}
//# sourceMappingURL=RclRecurringTransaction.d.ts.map