/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * KpiItemLine
 */
export interface KpiItemLine {
  /**
   * Kpi Code.
   * @nullable
   */
  kpiCode?: string;
  /**
   * Kpi Line Number.
   * @nullable
   */
  kpiLineNumber?: number;
  /**
   * Kpi Name.
   * @nullable
   */
  kpiName?: string;
  /**
   * Kpi Value 1.
   * @nullable
   */
  kpiValue1?: number;
  /**
   * Kpi Value 2.
   * @nullable
   */
  kpiValue2?: number;
  /**
   * Kpi Value 3.
   * @nullable
   */
  kpiValue3?: number;
  /**
   * Kpi Value 4.
   * @nullable
   */
  kpiValue4?: number;
  /**
   * Kpi Value 5.
   * @nullable
   */
  kpiValue5?: number;
  /**
   * Kpi Value 6.
   * @nullable
   */
  kpiValue6?: number;
  /**
   * Kpi Value 7.
   * @nullable
   */
  kpiValue7?: number;
  /**
   * Kpi Value 8.
   * @nullable
   */
  kpiValue8?: number;
  /**
   * Kpi Value 9.
   * @nullable
   */
  kpiValue9?: number;
  /**
   * Kpi Value 10.
   * @nullable
   */
  kpiValue10?: number;
  /**
   * Kpi Value 11.
   * @nullable
   */
  kpiValue11?: number;
  /**
   * Kpi Value 12.
   * @nullable
   */
  kpiValue12?: number;
  /**
   * Kpi Value 13.
   * @nullable
   */
  kpiValue13?: number;
  /**
   * Kpi Value 14.
   * @nullable
   */
  kpiValue14?: number;
  /**
   * Kpi Value 15.
   * @nullable
   */
  kpiValue15?: number;
  /**
   * Kpi Value 16.
   * @nullable
   */
  kpiValue16?: number;
  /**
   * Kpi Value 17.
   * @nullable
   */
  kpiValue17?: number;
  /**
   * Kpi Value 18.
   * @nullable
   */
  kpiValue18?: number;
  /**
   * Kpi Value 19.
   * @nullable
   */
  kpiValue19?: number;
  /**
   * Kpi Value 20.
   * @nullable
   */
  kpiValue20?: number;
  /**
   * Kpi Value 21.
   * @nullable
   */
  kpiValue21?: number;
  /**
   * Kpi Value 22.
   * @nullable
   */
  kpiValue22?: number;
  /**
   * Kpi Value 23.
   * @nullable
   */
  kpiValue23?: number;
  /**
   * Kpi Value 24.
   * @nullable
   */
  kpiValue24?: number;
  /**
   * Kpi Value 25.
   * @nullable
   */
  kpiValue25?: number;
  /**
   * Kpi Value 26.
   * @nullable
   */
  kpiValue26?: number;
  /**
   * Kpi Value 27.
   * @nullable
   */
  kpiValue27?: number;
  /**
   * Kpi Value 28.
   * @nullable
   */
  kpiValue28?: number;
  /**
   * Kpi Value 29.
   * @nullable
   */
  kpiValue29?: number;
  /**
   * Kpi Value 30.
   * @nullable
   */
  kpiValue30?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[KpiItemLine.build]] instead.
 */
export function createKpiItemLine(json: any): KpiItemLine {
  return KpiItemLine.build(json);
}

/**
 * KpiItemLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class KpiItemLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, KpiItemLine> {
  /**
   * Representation of the [[KpiItemLine.kpiCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('KPICode', this, 'Edm.String');
  /**
   * Representation of the [[KpiItemLine.kpiLineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiLineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPILineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[KpiItemLine.kpiName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('KPIName', this, 'Edm.String');
  /**
   * Representation of the [[KpiItemLine.kpiValue1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue1', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue2', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue3: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue3', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue4: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue4', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue5: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue5', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue6]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue6: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue6', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue7]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue7: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue7', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue8]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue8: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue8', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue9]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue9: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue9', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue10]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue10: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue10', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue11]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue11: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue11', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue12]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue12: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue12', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue13]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue13: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue13', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue14]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue14: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue14', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue15]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue15: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue15', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue16]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue16: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue16', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue17]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue17: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue17', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue18]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue18: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue18', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue19]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue19: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue19', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue20]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue20: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue20', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue21]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue21: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue21', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue22]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue22: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue22', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue23]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue23: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue23', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue24]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue24: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue24', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue25]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue25: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue25', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue26]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue26: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue26', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue27]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue27: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue27', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue28]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue28: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue28', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue29]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue29: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue29', this, 'Edm.Double');
  /**
   * Representation of the [[KpiItemLine.kpiValue30]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiValue30: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KPIValue30', this, 'Edm.Double');

  /**
   * Creates an instance of KpiItemLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, KpiItemLine);
  }
}

export namespace KpiItemLine {
  /**
   * Metadata information on all properties of the `KpiItemLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<KpiItemLine>[] = [{
    originalName: 'KPICode',
    name: 'kpiCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'KPILineNumber',
    name: 'kpiLineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'KPIName',
    name: 'kpiName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'KPIValue1',
    name: 'kpiValue1',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue2',
    name: 'kpiValue2',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue3',
    name: 'kpiValue3',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue4',
    name: 'kpiValue4',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue5',
    name: 'kpiValue5',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue6',
    name: 'kpiValue6',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue7',
    name: 'kpiValue7',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue8',
    name: 'kpiValue8',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue9',
    name: 'kpiValue9',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue10',
    name: 'kpiValue10',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue11',
    name: 'kpiValue11',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue12',
    name: 'kpiValue12',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue13',
    name: 'kpiValue13',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue14',
    name: 'kpiValue14',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue15',
    name: 'kpiValue15',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue16',
    name: 'kpiValue16',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue17',
    name: 'kpiValue17',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue18',
    name: 'kpiValue18',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue19',
    name: 'kpiValue19',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue20',
    name: 'kpiValue20',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue21',
    name: 'kpiValue21',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue22',
    name: 'kpiValue22',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue23',
    name: 'kpiValue23',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue24',
    name: 'kpiValue24',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue25',
    name: 'kpiValue25',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue26',
    name: 'kpiValue26',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue27',
    name: 'kpiValue27',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue28',
    name: 'kpiValue28',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue29',
    name: 'kpiValue29',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'KPIValue30',
    name: 'kpiValue30',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): KpiItemLine {
    return deserializeComplexTypeV4(json, KpiItemLine);
  }
}
