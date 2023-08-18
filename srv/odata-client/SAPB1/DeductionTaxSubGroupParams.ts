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
 * DeductionTaxSubGroupParams
 */
export interface DeductionTaxSubGroupParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Group Code.
   * @nullable
   */
  groupCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Group Name.
   * @nullable
   */
  groupName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * DeductionTaxSubGroupParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DeductionTaxSubGroupParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DeductionTaxSubGroupParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DeductionTaxSubGroupParams.groupCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GroupCode', 'Edm.String', true);
  /**
   * Representation of the {@link DeductionTaxSubGroupParams.groupName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GroupName', 'Edm.String', true);

  /**
   * Creates an instance of DeductionTaxSubGroupParamsField.
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
      DeductionTaxSubGroupParams,
      fieldOptions
    );
  }
}

export namespace DeductionTaxSubGroupParams {
  /**
   * Metadata information on all properties of the `DeductionTaxSubGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DeductionTaxSubGroupParams>[] =
    [
      {
        originalName: 'GroupCode',
        name: 'groupCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'GroupName',
        name: 'groupName',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
