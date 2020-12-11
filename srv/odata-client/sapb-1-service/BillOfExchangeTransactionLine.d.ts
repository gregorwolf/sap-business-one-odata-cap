import { Moment } from 'moment';
import { BoBoeTypes } from './BoBoeTypes';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BillOfExchangeTransactionLine
 */
export interface BillOfExchangeTransactionLine {
    /**
     * Bill Of Exchange No.
     * @nullable
     */
    billOfExchangeNo?: number;
    /**
     * Bill Of Exchange Type.
     * @nullable
     */
    billOfExchangeType?: BoBoeTypes;
    /**
     * Bill Of Exchange Due Date.
     * @nullable
     */
    billOfExchangeDueDate?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransactionLine.build]] instead.
 */
export declare function createBillOfExchangeTransactionLine(json: any): BillOfExchangeTransactionLine;
/**
 * BillOfExchangeTransactionLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BillOfExchangeTransactionLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BillOfExchangeTransactionLine> {
    /**
     * Representation of the [[BillOfExchangeTransactionLine.billOfExchangeNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billOfExchangeNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchangeTransactionLine.billOfExchangeType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billOfExchangeType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchangeTransactionLine.billOfExchangeDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billOfExchangeDueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Creates an instance of BillOfExchangeTransactionLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BillOfExchangeTransactionLine {
    /**
     * Metadata information on all properties of the `BillOfExchangeTransactionLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BillOfExchangeTransactionLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BillOfExchangeTransactionLine;
}
//# sourceMappingURL=BillOfExchangeTransactionLine.d.ts.map