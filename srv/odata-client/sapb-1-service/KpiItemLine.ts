/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class KpiItemLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace KpiItemLine {
  export function build(json: { [keys: string]: FieldType }): KpiItemLine {
    return createComplexType(json, {
      KPICode: (kpiCode: string) => ({ kpiCode: edmToTs(kpiCode, 'Edm.String') }),
      KPILineNumber: (kpiLineNumber: number) => ({ kpiLineNumber: edmToTs(kpiLineNumber, 'Edm.Int32') }),
      KPIName: (kpiName: string) => ({ kpiName: edmToTs(kpiName, 'Edm.String') }),
      KPIValue1: (kpiValue1: number) => ({ kpiValue1: edmToTs(kpiValue1, 'Edm.Double') }),
      KPIValue2: (kpiValue2: number) => ({ kpiValue2: edmToTs(kpiValue2, 'Edm.Double') }),
      KPIValue3: (kpiValue3: number) => ({ kpiValue3: edmToTs(kpiValue3, 'Edm.Double') }),
      KPIValue4: (kpiValue4: number) => ({ kpiValue4: edmToTs(kpiValue4, 'Edm.Double') }),
      KPIValue5: (kpiValue5: number) => ({ kpiValue5: edmToTs(kpiValue5, 'Edm.Double') }),
      KPIValue6: (kpiValue6: number) => ({ kpiValue6: edmToTs(kpiValue6, 'Edm.Double') }),
      KPIValue7: (kpiValue7: number) => ({ kpiValue7: edmToTs(kpiValue7, 'Edm.Double') }),
      KPIValue8: (kpiValue8: number) => ({ kpiValue8: edmToTs(kpiValue8, 'Edm.Double') }),
      KPIValue9: (kpiValue9: number) => ({ kpiValue9: edmToTs(kpiValue9, 'Edm.Double') }),
      KPIValue10: (kpiValue10: number) => ({ kpiValue10: edmToTs(kpiValue10, 'Edm.Double') }),
      KPIValue11: (kpiValue11: number) => ({ kpiValue11: edmToTs(kpiValue11, 'Edm.Double') }),
      KPIValue12: (kpiValue12: number) => ({ kpiValue12: edmToTs(kpiValue12, 'Edm.Double') }),
      KPIValue13: (kpiValue13: number) => ({ kpiValue13: edmToTs(kpiValue13, 'Edm.Double') }),
      KPIValue14: (kpiValue14: number) => ({ kpiValue14: edmToTs(kpiValue14, 'Edm.Double') }),
      KPIValue15: (kpiValue15: number) => ({ kpiValue15: edmToTs(kpiValue15, 'Edm.Double') }),
      KPIValue16: (kpiValue16: number) => ({ kpiValue16: edmToTs(kpiValue16, 'Edm.Double') }),
      KPIValue17: (kpiValue17: number) => ({ kpiValue17: edmToTs(kpiValue17, 'Edm.Double') }),
      KPIValue18: (kpiValue18: number) => ({ kpiValue18: edmToTs(kpiValue18, 'Edm.Double') }),
      KPIValue19: (kpiValue19: number) => ({ kpiValue19: edmToTs(kpiValue19, 'Edm.Double') }),
      KPIValue20: (kpiValue20: number) => ({ kpiValue20: edmToTs(kpiValue20, 'Edm.Double') }),
      KPIValue21: (kpiValue21: number) => ({ kpiValue21: edmToTs(kpiValue21, 'Edm.Double') }),
      KPIValue22: (kpiValue22: number) => ({ kpiValue22: edmToTs(kpiValue22, 'Edm.Double') }),
      KPIValue23: (kpiValue23: number) => ({ kpiValue23: edmToTs(kpiValue23, 'Edm.Double') }),
      KPIValue24: (kpiValue24: number) => ({ kpiValue24: edmToTs(kpiValue24, 'Edm.Double') }),
      KPIValue25: (kpiValue25: number) => ({ kpiValue25: edmToTs(kpiValue25, 'Edm.Double') }),
      KPIValue26: (kpiValue26: number) => ({ kpiValue26: edmToTs(kpiValue26, 'Edm.Double') }),
      KPIValue27: (kpiValue27: number) => ({ kpiValue27: edmToTs(kpiValue27, 'Edm.Double') }),
      KPIValue28: (kpiValue28: number) => ({ kpiValue28: edmToTs(kpiValue28, 'Edm.Double') }),
      KPIValue29: (kpiValue29: number) => ({ kpiValue29: edmToTs(kpiValue29, 'Edm.Double') }),
      KPIValue30: (kpiValue30: number) => ({ kpiValue30: edmToTs(kpiValue30, 'Edm.Double') })
    });
  }
}
