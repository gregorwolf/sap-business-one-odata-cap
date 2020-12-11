import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DocumentInstallment
 */
export interface DocumentInstallment {
    /**
     * Due Date.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * Percentage.
     * @nullable
     */
    percentage?: number;
    /**
     * Total.
     * @nullable
     */
    total?: number;
    /**
     * Last Dunning Date.
     * @nullable
     */
    lastDunningDate?: Moment;
    /**
     * Dunning Level.
     * @nullable
     */
    dunningLevel?: number;
    /**
     * Total Fc.
     * @nullable
     */
    totalFc?: number;
    /**
     * Installment Id.
     * @nullable
     */
    installmentId?: number;
    /**
     * Payment Ordered.
     * @nullable
     */
    paymentOrdered?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[DocumentInstallment.build]] instead.
 */
export declare function createDocumentInstallment(json: any): DocumentInstallment;
/**
 * DocumentInstallmentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentInstallmentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentInstallment> {
    /**
     * Representation of the [[DocumentInstallment.dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[DocumentInstallment.percentage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    percentage: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentInstallment.total]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    total: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentInstallment.lastDunningDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lastDunningDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[DocumentInstallment.dunningLevel]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dunningLevel: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentInstallment.totalFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentInstallment.installmentId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    installmentId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentInstallment.paymentOrdered]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentOrdered: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of DocumentInstallmentField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DocumentInstallment {
    /**
     * Metadata information on all properties of the `DocumentInstallment` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DocumentInstallment>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentInstallment;
}
//# sourceMappingURL=DocumentInstallment.d.ts.map