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
 * KpiParams
 */
export interface KpiParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Kpi Code.
   * @nullable
   */
  kpiCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Kpi Name.
   * @nullable
   */
  kpiName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * KpiParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class KpiParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  KpiParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link KpiParams.kpiCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPICode', 'Edm.String', true);
  /**
   * Representation of the {@link KpiParams.kpiName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIName', 'Edm.String', true);

  /**
   * Creates an instance of KpiParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, KpiParams, fieldOptions);
  }
}

export namespace KpiParams {
  /**
   * Metadata information on all properties of the `KpiParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<KpiParams>[] = [
    {
      originalName: 'KPICode',
      name: 'kpiCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'KPIName',
      name: 'kpiName',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
