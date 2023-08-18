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
 * HolidayParams
 */
export interface HolidayParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Holiday Code.
   * @nullable
   */
  holidayCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * HolidayParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class HolidayParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  HolidayParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link HolidayParams.holidayCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  holidayCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('HolidayCode', 'Edm.String', true);

  /**
   * Creates an instance of HolidayParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, HolidayParams, fieldOptions);
  }
}

export namespace HolidayParams {
  /**
   * Metadata information on all properties of the `HolidayParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<HolidayParams>[] = [
    {
      originalName: 'HolidayCode',
      name: 'holidayCode',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
