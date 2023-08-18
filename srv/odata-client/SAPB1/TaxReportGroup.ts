/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * TaxReportGroup
 */
export interface TaxReportGroup<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sum.
   * @nullable
   */
  sum?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * TaxReportGroupField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxReportGroupField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TaxReportGroup,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TaxReportGroup.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true);
  /**
   * Representation of the {@link TaxReportGroup.sum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sum: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Sum', BoYesNoEnum, true);

  /**
   * Creates an instance of TaxReportGroupField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, TaxReportGroup, fieldOptions);
  }
}

export namespace TaxReportGroup {
  /**
   * Metadata information on all properties of the `TaxReportGroup` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxReportGroup>[] = [
    {
      originalName: 'Code',
      name: 'code',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Sum',
      name: 'sum',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
