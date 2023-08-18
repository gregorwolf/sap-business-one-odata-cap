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
 * ProfitCenterParams
 */
export interface ProfitCenterParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Center Code.
   * @nullable
   */
  centerCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Center Name.
   * @nullable
   */
  centerName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ProfitCenterParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProfitCenterParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ProfitCenterParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ProfitCenterParams.centerCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  centerCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CenterCode', 'Edm.String', true);
  /**
   * Representation of the {@link ProfitCenterParams.centerName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  centerName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CenterName', 'Edm.String', true);

  /**
   * Creates an instance of ProfitCenterParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ProfitCenterParams, fieldOptions);
  }
}

export namespace ProfitCenterParams {
  /**
   * Metadata information on all properties of the `ProfitCenterParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ProfitCenterParams>[] = [
    {
      originalName: 'CenterCode',
      name: 'centerCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CenterName',
      name: 'centerName',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
