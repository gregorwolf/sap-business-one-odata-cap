/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * CashFlowLineItemParams
 */
export interface CashFlowLineItemParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Item Id.
   * @nullable
   */
  lineItemId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Item Name.
   * @nullable
   */
  lineItemName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * CashFlowLineItemParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CashFlowLineItemParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CashFlowLineItemParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CashFlowLineItemParams.lineItemId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineItemId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineItemID', 'Edm.Int32', true);
  /**
   * Representation of the {@link CashFlowLineItemParams.lineItemName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineItemName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineItemName', 'Edm.String', true);

  /**
   * Creates an instance of CashFlowLineItemParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      CashFlowLineItemParams,
      fieldOptions
    );
  }
}

export namespace CashFlowLineItemParams {
  /**
   * Metadata information on all properties of the `CashFlowLineItemParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CashFlowLineItemParams>[] = [
    {
      originalName: 'LineItemID',
      name: 'lineItemId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineItemName',
      name: 'lineItemName',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
