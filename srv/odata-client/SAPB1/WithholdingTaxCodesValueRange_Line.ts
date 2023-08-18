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
 * WithholdingTaxCodesValueRange_Line
 */
export interface WithholdingTaxCodesValueRange_Line<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Value From.
   * @nullable
   */
  valueFrom?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * W Tax To Be Deductible.
   * @nullable
   */
  wTaxToBeDeductible?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Rate.
   * @nullable
   */
  rate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * WithholdingTaxCodesValueRange_LineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WithholdingTaxCodesValueRange_LineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WithholdingTaxCodesValueRange_Line,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WithholdingTaxCodesValueRange_Line.valueFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  valueFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ValueFrom', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxCodesValueRange_Line.wTaxToBeDeductible} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxToBeDeductible: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WTaxToBeDeductible',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxCodesValueRange_Line.rate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Rate', 'Edm.Double', true);

  /**
   * Creates an instance of WithholdingTaxCodesValueRange_LineField.
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
      WithholdingTaxCodesValueRange_Line,
      fieldOptions
    );
  }
}

export namespace WithholdingTaxCodesValueRange_Line {
  /**
   * Metadata information on all properties of the `WithholdingTaxCodesValueRange_Line` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WithholdingTaxCodesValueRange_Line>[] =
    [
      {
        originalName: 'ValueFrom',
        name: 'valueFrom',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'WTaxToBeDeductible',
        name: 'wTaxToBeDeductible',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'Rate',
        name: 'rate',
        type: 'Edm.Double',
        isCollection: false
      }
    ];
}
