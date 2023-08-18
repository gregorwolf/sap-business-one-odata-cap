/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentMeansTypeEnum } from './PaymentMeansTypeEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * CashFlowAssignment
 */
export interface CashFlowAssignment<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Cash Flow Assignments Id.
   * @nullable
   */
  cashFlowAssignmentsId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Cash Flow Line Item Id.
   * @nullable
   */
  cashFlowLineItemId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Credit.
   * @nullable
   */
  credit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Payment Means.
   * @nullable
   */
  paymentMeans?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Check Number.
   * @nullable
   */
  checkNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Amount Lc.
   * @nullable
   */
  amountLc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Amount Fc.
   * @nullable
   */
  amountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Jdt Line Id.
   * @nullable
   */
  jdtLineId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Jdt Id.
   * @nullable
   */
  jdtId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * CashFlowAssignmentField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CashFlowAssignmentField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CashFlowAssignment,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CashFlowAssignment.cashFlowAssignmentsId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashFlowAssignmentsId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CashFlowAssignmentsID',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link CashFlowAssignment.cashFlowLineItemId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashFlowLineItemId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CashFlowLineItemID',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link CashFlowAssignment.credit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  credit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Credit', 'Edm.Double', true);
  /**
   * Representation of the {@link CashFlowAssignment.paymentMeans} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentMeans: EnumField<
    EntityT,
    DeSerializersT,
    PaymentMeansTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'PaymentMeans',
    PaymentMeansTypeEnum,
    true
  );
  /**
   * Representation of the {@link CashFlowAssignment.checkNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CheckNumber', 'Edm.String', true);
  /**
   * Representation of the {@link CashFlowAssignment.amountLc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountLc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AmountLC', 'Edm.Double', true);
  /**
   * Representation of the {@link CashFlowAssignment.amountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AmountFC', 'Edm.Double', true);
  /**
   * Representation of the {@link CashFlowAssignment.jdtLineId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  jdtLineId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('JDTLineId', 'Edm.Int32', true);
  /**
   * Representation of the {@link CashFlowAssignment.jdtId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  jdtId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('JDTId', 'Edm.Int32', true);

  /**
   * Creates an instance of CashFlowAssignmentField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, CashFlowAssignment, fieldOptions);
  }
}

export namespace CashFlowAssignment {
  /**
   * Metadata information on all properties of the `CashFlowAssignment` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CashFlowAssignment>[] = [
    {
      originalName: 'CashFlowAssignmentsID',
      name: 'cashFlowAssignmentsId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CashFlowLineItemID',
      name: 'cashFlowLineItemId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Credit',
      name: 'credit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'PaymentMeans',
      name: 'paymentMeans',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CheckNumber',
      name: 'checkNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AmountLC',
      name: 'amountLc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AmountFC',
      name: 'amountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'JDTLineId',
      name: 'jdtLineId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'JDTId',
      name: 'jdtId',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
