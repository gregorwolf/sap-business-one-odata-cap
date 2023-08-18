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
 * KpiItemLine
 */
export interface KpiItemLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Kpi Code.
   * @nullable
   */
  kpiCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Kpi Line Number.
   * @nullable
   */
  kpiLineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Kpi Name.
   * @nullable
   */
  kpiName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Kpi Value 1.
   * @nullable
   */
  kpiValue1?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 2.
   * @nullable
   */
  kpiValue2?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 3.
   * @nullable
   */
  kpiValue3?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 4.
   * @nullable
   */
  kpiValue4?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 5.
   * @nullable
   */
  kpiValue5?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 6.
   * @nullable
   */
  kpiValue6?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 7.
   * @nullable
   */
  kpiValue7?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 8.
   * @nullable
   */
  kpiValue8?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 9.
   * @nullable
   */
  kpiValue9?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 10.
   * @nullable
   */
  kpiValue10?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 11.
   * @nullable
   */
  kpiValue11?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 12.
   * @nullable
   */
  kpiValue12?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 13.
   * @nullable
   */
  kpiValue13?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 14.
   * @nullable
   */
  kpiValue14?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 15.
   * @nullable
   */
  kpiValue15?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 16.
   * @nullable
   */
  kpiValue16?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 17.
   * @nullable
   */
  kpiValue17?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 18.
   * @nullable
   */
  kpiValue18?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 19.
   * @nullable
   */
  kpiValue19?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 20.
   * @nullable
   */
  kpiValue20?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 21.
   * @nullable
   */
  kpiValue21?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 22.
   * @nullable
   */
  kpiValue22?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 23.
   * @nullable
   */
  kpiValue23?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 24.
   * @nullable
   */
  kpiValue24?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 25.
   * @nullable
   */
  kpiValue25?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 26.
   * @nullable
   */
  kpiValue26?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 27.
   * @nullable
   */
  kpiValue27?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 28.
   * @nullable
   */
  kpiValue28?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 29.
   * @nullable
   */
  kpiValue29?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Kpi Value 30.
   * @nullable
   */
  kpiValue30?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * KpiItemLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class KpiItemLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  KpiItemLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link KpiItemLine.kpiCode} property for query construction.
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
   * Representation of the {@link KpiItemLine.kpiLineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiLineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPILineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link KpiItemLine.kpiName} property for query construction.
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
   * Representation of the {@link KpiItemLine.kpiValue1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue1', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue2', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue3', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue4', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue5', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue6} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue6: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue6', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue7} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue7: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue7', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue8} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue8: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue8', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue9} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue9: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue9', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue10} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue10: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue10', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue11} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue11: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue11', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue12} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue12: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue12', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue13} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue13: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue13', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue14} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue14: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue14', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue15} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue15: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue15', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue16} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue16: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue16', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue17} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue17: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue17', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue18} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue18: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue18', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue19} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue19: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue19', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue20} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue20: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue20', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue21} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue21: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue21', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue22} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue22: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue22', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue23} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue23: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue23', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue24} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue24: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue24', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue25} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue25: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue25', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue26} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue26: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue26', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue27} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue27: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue27', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue28} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue28: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue28', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue29} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue29: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue29', 'Edm.Double', true);
  /**
   * Representation of the {@link KpiItemLine.kpiValue30} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue30: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('KPIValue30', 'Edm.Double', true);

  /**
   * Creates an instance of KpiItemLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, KpiItemLine, fieldOptions);
  }
}

export namespace KpiItemLine {
  /**
   * Metadata information on all properties of the `KpiItemLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<KpiItemLine>[] = [
    {
      originalName: 'KPICode',
      name: 'kpiCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'KPILineNumber',
      name: 'kpiLineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'KPIName',
      name: 'kpiName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'KPIValue1',
      name: 'kpiValue1',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue2',
      name: 'kpiValue2',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue3',
      name: 'kpiValue3',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue4',
      name: 'kpiValue4',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue5',
      name: 'kpiValue5',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue6',
      name: 'kpiValue6',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue7',
      name: 'kpiValue7',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue8',
      name: 'kpiValue8',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue9',
      name: 'kpiValue9',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue10',
      name: 'kpiValue10',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue11',
      name: 'kpiValue11',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue12',
      name: 'kpiValue12',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue13',
      name: 'kpiValue13',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue14',
      name: 'kpiValue14',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue15',
      name: 'kpiValue15',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue16',
      name: 'kpiValue16',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue17',
      name: 'kpiValue17',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue18',
      name: 'kpiValue18',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue19',
      name: 'kpiValue19',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue20',
      name: 'kpiValue20',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue21',
      name: 'kpiValue21',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue22',
      name: 'kpiValue22',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue23',
      name: 'kpiValue23',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue24',
      name: 'kpiValue24',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue25',
      name: 'kpiValue25',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue26',
      name: 'kpiValue26',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue27',
      name: 'kpiValue27',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue28',
      name: 'kpiValue28',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue29',
      name: 'kpiValue29',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'KPIValue30',
      name: 'kpiValue30',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
