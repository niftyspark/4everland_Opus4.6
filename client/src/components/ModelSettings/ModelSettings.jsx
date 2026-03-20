import React from 'react';
import { useChatContext } from '../../context/ChatContext';
import './ModelSettings.css';

function ModelSettings() {
  const {
    models,
    selectedModel,
    setSelectedModel,
    temperature,
    setTemperature,
    maxTokens,
    setMaxTokens,
  } = useChatContext();

  return (
    <div className="sidebar-footer">
      <span className="model-label">Model</span>
      <select
        className="model-selector"
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
      >
        {models.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      <div className="settings-group">
        <label>
          Temperature
          <span className="val">{temperature}</span>
        </label>
        <input
          type="range"
          min="0"
          max="2"
          step="0.1"
          value={temperature}
          onChange={(e) => setTemperature(parseFloat(e.target.value))}
        />
      </div>

      <div className="settings-group" style={{ marginTop: 10 }}>
        <label>
          Max Tokens
          <span className="val">{maxTokens}</span>
        </label>
        <input
          type="range"
          min="256"
          max="16384"
          step="256"
          value={maxTokens}
          onChange={(e) => setMaxTokens(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
}

export default ModelSettings;
